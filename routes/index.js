var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//for development
if (process.env.USER === "eliezernunez") {
	require('/Users/eliezernunez/Desktop/build/models/User.js');
}; 
//for production
if (process.env.NODE_ENV === "production") {
	require('/app/models/User')
};
var User = mongoose.model('user');
var jwt = require('express-jwt');
var authCheck = jwt({
	secret: new Buffer(process.env.BUILD_SECRET, 'base64'),
	audience: 'EscYrnfdxcDUs3WJeJL1edHhLVrlFQtB',
	userProperty: 'payload'
});

/*
var plaid = require('plaid');
var public_key='0cde5ad06e72646c0a7a2587ab9062';
var PLAID_SECRET=process.env.PLAID_SECRET;
var PLAID_CLIENT_ID=process.env.PLAID_CLIENT_ID;

var plaidClient = new plaid.Client(PLAID_CLIENT_ID,
								   PLAID_SECRET,
                                   plaid.environments.tartan);

router.post('/authenticate', function(req, res){
	var public_token = req.body.public_token;

	// Exchange a public_token for a Plaid access_token
	plaidClient.exchangeToken(public_token, function(err, exchangeTokenRes) {
	    if (err != null) { 	
	    	console.log(err);
	    } else {
	    	// This is your Plaid access token - store somewhere persistent
	    	// The access_token can be used to make Plaid API calls to
	    	// retrieve accounts and transactions
	    	var access_token = exchangeTokenRes.access_token;

	    	plaidClient.getConnectUser(access_token, {gte: '30 days ago'}, function(err, response) {	    		
				User.findOne({'email': req.body.byt_email}, function(error, user){					
					if(user){
						for (i=0; i<response.transactions.length; i++){
							var x = {
								'id': i,
								'amount': response.transactions[i].amount,
								'name': response.transactions[i].name,
								'date': response.transactions[i].date
							};
							console.log(x)
							console.log(i)
							user.plaid_banking_transactions.push(x)
						}
						user.save();
					}
				})
				return res.json(response.transactions);
			});

	    	plaidClient.getAuthUser(access_token, function(err, authRes) {
	    		if (err != null) {
	        		console.log(err);
	        	} else {
	        	// An array of accounts for this user, containing account
	        	// names, balances, and account and routing numbers.
		        	var accounts = authRes.accounts;
		        	// Return account data
		        	res.json({accounts: accounts});
	        	}
	      	});
	    }
	});
});
*/

// Stripe stuff 
var keyPublishable = process.env.PUBLISHABLE_KEY;
var keySecret = process.env.SECRET_KEY;
var stripe = require("stripe")(keySecret);

router.get("/stripe", function(req, res){
	return res.render("index")
});

router.post('/charge', function(req, res){
	var keySecret = process.env.SECRET_KEY;
	var stripe = require("stripe")(keySecret);
	var charge = stripe.charges.create({
		amount: 5900, // Amount in cents
		currency: "usd",
		source: req.body.token_id,
		description: "BYT 1-on-1"
	}, function(err, charge) {
		if (err && err.type === 'StripeCardError') {
			console.log('The card has been declined');
		}
	});
	User.findOne({'email': req.body.byt_email}, function(error, user){
		if(user){
			user.stripe_token = req.body.token_id;
			user.save(function (err){						
				console.log(err);
			});
		}		
	});
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});

/*
	stripe.customers.create({
		email: req.body.byt_email
	}, function(err, customer){
		if (err) {
			console.log(err)
		}
		User.findOne({'email': req.body.stripeEmail}, function(error, user){
			if(user){
				user.stripe_token = req.body.token_id,
				user.stripe_customer_id = customer.id,
				user.stripe_email_address = customer.email
				user.save(function (err){						
					console.log(err);
				});
			}		
		});
		stripe.subscriptions.create({
			// store the id value in your own database for later reference (presumably with the customer's email address)
			customer: customer.id,
			plan: "byt_annual_subscription_123"
		}, function(err, subscription) {
			// asynchronously called
		});
		
	})
*/

router.post('/create-user', authCheck, function(req, res){
	User.findOne({'email': req.body.email}, function(error, user){
		if(!user){
			var user = new User();
			user.email = req.body.email;
			user.nickName = req.body.nickname;
			user.save(function (err){						
				console.log(err);
			});
			return res.json(user);
		}
	})
})
router.post('/add-income', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		if (user.income.length > 0 ) {
			user.income.unshift({'id': user.income.length,
								 'description': req.body.description,
								 'category': req.body.category, 
								 'amount': req.body.amount,
								 'date': req.body.date});
		};
		if (user.income.length === 0) {
			user.income.unshift({'id': 0,
								 'description': req.body.description,
							     'category': req.body.category,
							     'amount': req.body.amount,
							     'date': req.body.date});
		}
		user.save();
		return res.json(user);
	});
});
router.post('/add-income-projections', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		if (user.income.length > 0 ) {
			user.incomeProjections.unshift({'id': user.income.length,
										 	'description': req.body.description,
										 	'category': req.body.category, 
										 	'amount': req.body.amount,
										 	'date': req.body.date});
		};
		if (user.income.length === 0) {
			user.incomeProjections.unshift({'id': 0,
								 			'description': req.body.description,
							     			'category': req.body.category,
							     			'amount': req.body.amount,
							     			'date': req.body.date});
		}
		user.save();
		return res.json(user);
	});
});
router.post('/add-asset', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){		
		if (user.assets.length > 0 ) {
			user.assets.unshift({'id': user.assets.length,
								 'description': req.body.description,
								 'category': req.body.category, 
								 'amount': req.body.amount,
								 'date': req.body.date});
		};
		if (user.assets.length === 0) {
			user.assets.unshift({'id': 0,
								 'description': req.body.description,
							     'category': req.body.category,
							     'amount': req.body.amount,
							     'date': req.body.date});
		}
		user.save();
		return res.json(user);
	});
});
router.post('/add-liability', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){		
		if (user.liabilities.length > 0 ) {
			user.liabilities.unshift({'id': user.liabilities.length,
								      'description': req.body.description,
								      'category': req.body.category, 
								      'amount': req.body.amount,
								      'date': req.body.date});
		};
		if (user.liabilities.length === 0) {
			user.liabilities.unshift({'id': 0,
								      'description': req.body.description,
							          'category': req.body.category,
							          'amount': req.body.amount,
							          'date': req.body.date});
		}
		user.save();
		return res.json(user);
	});
});
// the add-bills function looks pretty clean. The add-monthly-expenses function needs to be cleaned up.
router.post('/add-bill', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		if (user.monthlyBills.length > 0 ) {
			user.monthlyBills.unshift({'id': user.monthlyBills.length,
									   'description': req.body.description,
								   	   'category': req.body.category, 
								   	   'subCategory': req.body.subCategory,
								       'amount': req.body.amount,
								       'date': req.body.date});
		};
		if (user.monthlyBills.length === 0) {
			user.monthlyBills.unshift({'id': 0,
									   'description': req.body.description,
								   	   'category': req.body.category, 
								   	   'subCategory': req.body.subCategory,
								       'amount': req.body.amount,
								       'date': req.body.date});
		};
		user.save();
		return res.json(user);
	});
});
router.post('/add-bill-projections', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		if (user.billProjections.length > 0 ) {
			user.billProjections.unshift({'id': user.billProjections.length,
										  'description': req.body.description,
								   	      'category': req.body.category, 
								   	      'subCategory': req.body.subCategory,
								          'amount': req.body.amount,
								   	      'date': req.body.date});
		};
		if (user.billProjections.length === 0) {
			user.billProjections.unshift({'id': 0,
								 		  'category': req.body.category,
								   	      'description': req.body.description,
								   	      'subCategory': req.body.subCategory,
								          'amount': req.body.amount,
								          'date': req.body.date});
		}
		user.save();
		return res.json(user);
	});
});
router.post('/add-monthly-expense', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){	
		if (user.monthlyExpenses.length > 0 ) {
			user.monthlyExpenses.unshift({'id': user.monthlyExpenses.length,
										  'description': req.body.description,
								   	      'category': req.body.category, 
								   	      'subCategory': req.body.subCategory,
								          'amount': req.body.amount,
								   	      'date': req.body.date});
		};
		if (user.monthlyExpenses.length === 0) {
			user.monthlyExpenses.unshift({'id': 0, 
								   	      'category': req.body.category,
								   	      'description': req.body.description,
								   	      'subCategory': req.body.subCategory,
								          'amount': req.body.amount,
								          'date': req.body.date});
		}		
		user.save();
		return res.json(user);
	});
});
router.post('/add-expense-projection', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){	
		console.log(req.body);
		if (user.expenseProjections.length > 0 ) {
			user.expenseProjections.unshift({'id': user.expenseProjections.length,
										  	 'description': req.body.description,
									   	     'category': req.body.category, 
									   	     'subCategory': req.body.subCategory,
									         'amount': req.body.amount,
									   	     'date': req.body.date});
		};
		if (user.expenseProjections.length === 0) {
			user.expenseProjections.unshift({'id': 0, 
								   	      	 'category': req.body.category,
								   	         'description': req.body.description,
								   	         'subCategory': req.body.subCategory,
								             'amount': req.body.amount,
								             'date': req.body.date});
		}		
		user.save();
		return res.json(user);
	});
});
router.post('/add-income-projection', authCheck, function(req, res){
	User.findOne( {'email': req.body.byt_email }, function(error, user){
		user.projectedIncome = req.body.bytIncomeProjection;
		user.save();
		return res.json(user);
	});
});
router.post('/add-bills-projection', authCheck, function(req, res){
	User.findOne( {'email': req.body.byt_email }, function(error, user){
		user.projectedBills = req.body.bytBillProjection;
		user.save();
		return res.json(user);
	});
});
router.post('/add-expenses-projection', authCheck, function(req, res){
	User.findOne( {'email': req.body.byt_email }, function(error, user){
		user.projectedExpenses = req.body.bytExpensesProjection;
		user.save();	
		return res.json(user);
	});
});
/*
router.get('/', function(req, res){
	res.render('index');
});
*/
router.get('/login', function(req, res){
	res.render('index');
});
router.get('/app', function(req, res){
	res.render('index');
});
router.get('/spending-journal/dashboard', function(req, res){
	res.render('index');
});
router.get('/spending-journal/income', function(req, res){
	res.render('index');
});
router.get('/spending-journal/bills', function(req, res){
	res.render('index');
});
router.get('/spending-journal/expenses', function(req, res){
	res.render('index');
});
router.get('/spending-journal/education', function(req, res){
	res.render('index');
});
router.get('/balance-sheet/net-worth', function(req, res){
	res.render('index');
});
router.get('/balance-sheet/assets', function(req, res){
	res.render('index');
});
router.get('/balance-sheet/liabilities', function(req, res){
	res.render('index');
});

router.get('/get-user', authCheck, function(req, res){
	User.findOne({'email': req.headers.byt_email}, function(error, user){
		if(user){
			user.calcPeriodStart();
			user.calcPeriodEnd();
			user.calcToday();
			user.calcDaysLeft();
			user.calcTotalIncome(user.income);
			user.calcTotalAssets(user.assets);
			user.calcTotalLiabilities(user.liabilities);			
			user.calcTotalBills(user.monthlyBills);
			user.calcTotalSpent(user.monthlyExpenses);
			user.calcTotalIncomeProjections(user.incomeProjections);
			user.calcTotalBillProjections(user.billProjections);
			user.calcTotalExpenseProjections(user.expenseProjections);
			user.calcLeftOver();
			user.calcDailyBudget();	
			user.calcUpBy();
			user.calcIncomeCategoryTotals();
			user.calcAssetCategoryTotals();
			user.calcLiabilityCategoryTotals();
			user.calcBillCategoryTotals();
			user.calcExpCategoryTotals();
			return res.json(user);
		}
	});
});
router.put('/remove-expense', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.monthlyExpenses.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-expense-projection', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.expenseProjections.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-bill', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.monthlyBills.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-bill-projection', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.billProjections.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-income', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.income.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-income-projection', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.incomeProjections.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-asset', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.assets.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-liability', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.liabilities.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.get('/facebook_redirect', function(req, res){
	res.redirect('https://www.facebook.com/buildyourtomorrow/');
});
router.get('/instagram_redirect', function(req, res){
	res.redirect('https://www.instagram.com/_buildyourtomorrow/');
});
router.get('/twitter_redirect', function(req, res){
	res.redirect('https://www.twitter.com/__byt__/');
});
//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res){
  res.render('index');
});
module.exports = router;