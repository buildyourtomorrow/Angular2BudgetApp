import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from './user';
import {Observable} from 'rxjs/Rx';
;
@Injectable()
export class GetBYTUser {
	// Set userProfile attribute of already saved profile
	constructor (public authHttp: AuthHttp) {}
    userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	getUser(): Observable<User[]>{
		let myHeader = new Headers();;
		myHeader.append('byt_email', this.userProfile.email);
		return this.authHttp.get('/get-user', {headers: myHeader }).map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}

@Injectable()
export class BYTPostProjections {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostIncomeProjection(bytIncomeProjection: number): Observable<User[]>{
		return this.authHttp.post('/add-income-projection', {"bytIncomeProjection": bytIncomeProjection, "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytPostBillProjection(bytBillProjection: number): Observable<User[]>{
		return this.authHttp.post('/add-bills-projection', {"bytBillProjection": bytBillProjection, "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytPostExpensesProjection(bytExpensesProjection: number): Observable<User[]>{
		return this.authHttp.post('/add-expenses-projection', {"bytExpensesProjection": bytExpensesProjection, "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostIncomeProjections {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostIncomeProjectionForm(byt_model: Object): Observable<any[]>{
		return this.authHttp.post('/add-income-projections', {"category": byt_model.category,
															  "description": byt_model.description,
															  "date": byt_model.date,
															  "amount": byt_model.amount,
															  "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostBillProjection {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostBillProjectionForm(byt_model: Object): Observable<any[]>{
		return this.authHttp.post('/add-bill-projections', {"category": byt_model.category,
															"subCategory": byt_model.subCategory,
															"date": byt_model.date,
															"amount": byt_model.amount,
															"byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostExpenseProjection {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostExpenseProjectionForm(byt_model: Object): Observable<any[]>{
		return this.authHttp.post('/add-expense-projection', {"category": byt_model.category,
															  "subCategory": byt_model.subCategory,
															  "date": byt_model.date,
															  "amount": byt_model.amount,
															  "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostIncome {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostIncomeForm(bytPostIncomeForm: Object): Observable<any[]>{
		return this.authHttp.post('/add-income', {"category": bytPostIncomeForm.category,
												  "description": bytPostIncomeForm.description,
												  "date": bytPostIncomeForm.date,
												  "amount": bytPostIncomeForm.amount,
												  "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostAsset {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostAssetForm(bytPostAssetForm: Object): Observable<any[]>{
		return this.authHttp.post('/add-asset', {"category": bytPostAssetForm.category,
												  "description": bytPostAssetForm.description,
												  "date": bytPostAssetForm.date,
												  "amount": bytPostAssetForm.amount,
												  "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostLiability {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostLiabilityForm(bytPostLiabilityForm: Object): Observable<any[]>{
		return this.authHttp.post('/add-liability', {"category": bytPostLiabilityForm.category,
												     "description": bytPostLiabilityForm.description,
												     "date": bytPostLiabilityForm.date,
												     "amount": bytPostLiabilityForm.amount,
												     "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostBill {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostBillForm(bytPostBillForm: Object): Observable<any[]>{
		return this.authHttp.post('/add-bill', {"category": bytPostBillForm.category,
												"description": bytPostBillForm.description,
												"subCategory": bytPostBillForm.subCategory,
												"date": bytPostBillForm.date,
												"amount": bytPostBillForm.amount,
												"byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}
@Injectable()
export class BYTPostExpense {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostExpenseForm(bytPostExpenseForm: Object): Observable<any[]>{
		return this.authHttp.post('/add-monthly-expense', {"category": bytPostExpenseForm.category,
														   "description": bytPostExpenseForm.description,
														   "subCategory": bytPostExpenseForm.subCategory,
												   		   "date": bytPostExpenseForm.date,
												 		   "amount": bytPostExpenseForm.amount,
														   "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}

@Injectable()
export class BYTRemoveTransaction {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytRemoveIncome(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-income', {"index": index,
													"byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytRemoveIncomeProjection(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-income-projection', {"index": index,
															   "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytRemoveBill(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-bill', {"index": index,
												  "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytRemoveBillProjection(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-bill-projection', {"index": index,
												  			 "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytRemoveExpense(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-expense', {"index": index,
												  	 "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytRemoveExpenseProjection(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-expense-projection', {"index": index,
												  	 			"byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytRemoveAsset(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-asset', {"index": index,
												   "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
	bytRemoveLiability(index: number): Observable<any[]>{
		return this.authHttp.put('/remove-liability', {"index": index,
												       "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}

@Injectable()
export class BYTStripePayment {
	constructor(private _http: Http) {}

	bytPostStripePayment(token_id: any, email: String): Observable<any[]>{
		return this._http.post('/charge', { "token_id": token_id, 
											"byt_email": email })
			.map(this.extractData)
			.catch(this.handleError)
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}

@Injectable()
export class BYTPlaid {
	constructor(public authHttp: AuthHttp) {}
	userProfile: Object = JSON.parse(localStorage.getItem('profile'));
	bytPostBankTransactions(public_token: Object): Observable<any[]>{
		return this.authHttp.post('/authenticate', {"public_token": public_token,										
												    "byt_email": this.userProfile.email})
			.map((res: Response) => res.json() )
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}
}