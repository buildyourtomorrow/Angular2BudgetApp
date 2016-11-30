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
router.post('/create-user', authCheck, function(req, res){
<<<<<<< HEAD
	User.findOne({'email': req.body.email}, function(error, user){
		if(!user){
			var user = new User();
			user.email = req.body.email;
			user.nickName = req.body.nickname;
=======
	console.log(req.payload)
	User.findOne({'email': req.payload.email}, function(error, user){
		console.log(user)
		if(!user){
			var user = new User();
			user.email = req.payload.email;
			user.nickName = req.payload.nickname;
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
			user.save(function (err){						
				console.log(err);
			});
			return res.json(user);
		}
	})
})
router.post('/add-income', authCheck, function(req, res){
<<<<<<< HEAD
	User.findOne({'email': req.body.byt_email}, function(error, user){
		if (user.income.length > 0 ) {
			user.income.unshift({'id': user.income.length,
								 'description': req.body.description,
=======
	User.findOne({'email': req.payload.email}, function(error, user){
		if (user.income.length > 0 ) {
			user.income.unshift({'id': user.income.length, 
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
								 'category': req.body.category, 
								 'amount': req.body.amount,
								 'date': req.body.date});
		};
		if (user.income.length === 0) {
<<<<<<< HEAD
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
router.post('/add-asset', authCheck, function(req, res){
	console.log(req.body)
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
=======
			user.income.unshift({'id': 0, 
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
							     'category': req.body.category,
							     'amount': req.body.amount,
							     'date': req.body.date});
		}
		user.save();
		return res.json(user);
	});
});
// the add-bills function looks pretty clean. The add-monthly-expenses function needs to be cleaned up.
<<<<<<< HEAD
router.post('/add-bill', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		if (user.monthlyBills.length > 0 ) {
			user.monthlyBills.unshift({'id': user.monthlyBills.length,
									   'description': req.body.description,
=======
router.post('/add-bill', authCheck, function(req, res){	
	User.findOne({'email': req.payload.email}, function(error, user){
		if (user.monthlyBills.length > 0 ) {
			user.monthlyBills.unshift({'id': user.monthlyBills.length, 
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
								   	   'category': req.body.category, 
								   	   'subCategory': req.body.subCategory,
								       'amount': req.body.amount,
								       'date': req.body.date});
		};
		if (user.monthlyBills.length === 0) {
<<<<<<< HEAD
			user.monthlyBills.unshift({'id': 0,
									   'description': req.body.description,
=======
			user.monthlyBills.unshift({'id': 0, 
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
								   	   'category': req.body.category, 
								   	   'subCategory': req.body.subCategory,
								       'amount': req.body.amount,
								       'date': req.body.date});
		};
		user.save();
		return res.json(user);
	});
});
router.post('/add-monthly-expense', authCheck, function(req, res){
<<<<<<< HEAD
	User.findOne({'email': req.body.byt_email}, function(error, user){	
		if (user.monthlyExpenses.length > 0 ) {
			user.monthlyExpenses.unshift({'id': user.monthlyExpenses.length,
										  'description': req.body.description,
=======
	User.findOne({'email': req.payload.email}, function(error, user){	
		if (user.monthlyExpenses.length > 0 ) {
			user.monthlyExpenses.unshift({'id': user.monthlyExpenses.length, 
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
								   	      'category': req.body.category, 
								   	      'subCategory': req.body.subCategory,
								          'amount': req.body.amount,
								   	      'date': req.body.date});
		};
		if (user.monthlyExpenses.length === 0) {
			user.monthlyExpenses.unshift({'id': 0, 
<<<<<<< HEAD
								   	      'category': req.body.category,
								   	      'description': req.body.description,
=======
								   	      'category': req.body.category, 
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
								   	      'subCategory': req.body.subCategory,
								          'amount': req.body.amount,
								          'date': req.body.date});
		}		
		user.save();
		return res.json(user);
	});
});
<<<<<<< HEAD
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

router.get('/', function(req, res){
	res.render('index');
});
router.get('/login', function(req, res){
	res.render('index');
});
router.get('/dashboard', function(req, res){
	res.render('index');
});
router.get('/income', function(req, res){
	res.render('index');
});
router.get('/bills', function(req, res){
	res.render('index');
});
router.get('/expenses', function(req, res){
	res.render('index');
});
router.get('/education', function(req, res){
	res.render('index');
});
router.get('/app', function(req, res){
	res.render('index');
});
router.get('/app/dashboard', function(req, res){
	res.render('index');
});
router.get('/app/income', function(req, res){
	res.render('index');
});
router.get('/app/bills', function(req, res){
	res.render('index');
});
router.get('/app/expenses', function(req, res){
	res.render('index');
});
router.get('/app/education', function(req, res){
	res.render('index');
});

router.get('/get-user', authCheck, function(req, res){
	User.findOne({'email': req.headers.byt_email}, function(error, user){
=======
router.get('/', function(req, res){
	res.render('index');
});
router.get('/get-user', authCheck, function(req, res){
	User.findOne({'email': req.payload.email}, function(error, user){
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
		if(user){
			user.calcPeriodStart();
			user.calcPeriodEnd();
			user.calcToday();
			user.calcDaysLeft();
			user.calcTotalIncome(user.income);
<<<<<<< HEAD
			user.calcTotalAssets(user.assets);
=======
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
			user.calcTotalBills(user.monthlyBills);
			user.calcTotalSpent(user.monthlyExpenses);
			user.calcLeftOver();
			user.calcDailyBudget();	
			user.calcUpBy();
			user.calcIncomeCategoryTotals();
<<<<<<< HEAD
			user.calcAssetCategoryTotals();
=======
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
			user.calcBillCategoryTotals();
			user.calcExpCategoryTotals();
			return res.json(user);
		}
	});
});
<<<<<<< HEAD
router.put('/remove-expense', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
=======
router.post('/add-projections', authCheck, function(req, res){
	User.findOne({'email': req.payload.email}, function(error, user){
		user.projectedIncome = req.body.projectedIncome;
		user.projectedBills = req.body.projectedBills;
		user.projectedExpenses = req.body.projectedExpenses;
		user.save();	
		return res.json(user);
	});
});
router.put('/remove-expense', authCheck, function(req, res){
	User.findOne({'email': req.payload.email}, function(error, user){
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
		user.monthlyExpenses.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-bill', authCheck, function(req, res){
<<<<<<< HEAD
	User.findOne({'email': req.body.byt_email}, function(error, user){
=======
	User.findOne({'email': req.payload.email}, function(error, user){
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
		user.monthlyBills.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
router.put('/remove-income', authCheck, function(req, res){
<<<<<<< HEAD
	User.findOne({'email': req.body.byt_email}, function(error, user){
=======
	User.findOne({'email': req.payload.email}, function(error, user){
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
		user.income.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
<<<<<<< HEAD
router.put('/remove-asset', authCheck, function(req, res){
	User.findOne({'email': req.body.byt_email}, function(error, user){
		user.assets.splice([req.body.index], 1);
		user.save();
		return res.json(user);
	});
});
=======
>>>>>>> 9d11c957592315a3b65daf5d8679b2a3219135ba
module.exports = router;