"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var angular2_jwt_1 = require('angular2-jwt');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Rx_1 = require('rxjs/Rx');
;
var GetBYTUser = (function () {
    // Set userProfile attribute of already saved profile
    function GetBYTUser(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    GetBYTUser.prototype.getUser = function () {
        var myHeader = new http_1.Headers();
        ;
        myHeader.append('byt_email', this.userProfile.email);
        return this.authHttp.get('/get-user', { headers: myHeader }).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    GetBYTUser = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], GetBYTUser);
    return GetBYTUser;
}());
exports.GetBYTUser = GetBYTUser;
var BYTPostProjections = (function () {
    function BYTPostProjections(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostProjections.prototype.bytPostIncomeProjection = function (bytIncomeProjection) {
        return this.authHttp.post('/add-income-projection', { "bytIncomeProjection": bytIncomeProjection, "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostProjections.prototype.bytPostBillProjection = function (bytBillProjection) {
        return this.authHttp.post('/add-bills-projection', { "bytBillProjection": bytBillProjection, "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostProjections.prototype.bytPostExpensesProjection = function (bytExpensesProjection) {
        return this.authHttp.post('/add-expenses-projection', { "bytExpensesProjection": bytExpensesProjection, "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostProjections = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostProjections);
    return BYTPostProjections;
}());
exports.BYTPostProjections = BYTPostProjections;
var BYTPostIncomeProjections = (function () {
    function BYTPostIncomeProjections(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostIncomeProjections.prototype.bytPostIncomeProjectionForm = function (byt_model) {
        return this.authHttp.post('/add-income-projections', { "category": byt_model.category,
            "description": byt_model.description,
            "date": byt_model.date,
            "amount": byt_model.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostIncomeProjections = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostIncomeProjections);
    return BYTPostIncomeProjections;
}());
exports.BYTPostIncomeProjections = BYTPostIncomeProjections;
var BYTPostBillProjection = (function () {
    function BYTPostBillProjection(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostBillProjection.prototype.bytPostBillProjectionForm = function (byt_model) {
        return this.authHttp.post('/add-bill-projections', { "category": byt_model.category,
            "subCategory": byt_model.subCategory,
            "date": byt_model.date,
            "amount": byt_model.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostBillProjection = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostBillProjection);
    return BYTPostBillProjection;
}());
exports.BYTPostBillProjection = BYTPostBillProjection;
var BYTPostExpenseProjection = (function () {
    function BYTPostExpenseProjection(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostExpenseProjection.prototype.bytPostExpenseProjectionForm = function (byt_model) {
        return this.authHttp.post('/add-expense-projection', { "category": byt_model.category,
            "subCategory": byt_model.subCategory,
            "date": byt_model.date,
            "amount": byt_model.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostExpenseProjection = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostExpenseProjection);
    return BYTPostExpenseProjection;
}());
exports.BYTPostExpenseProjection = BYTPostExpenseProjection;
var BYTPostIncome = (function () {
    function BYTPostIncome(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostIncome.prototype.bytPostIncomeForm = function (bytPostIncomeForm) {
        return this.authHttp.post('/add-income', { "category": bytPostIncomeForm.category,
            "description": bytPostIncomeForm.description,
            "date": bytPostIncomeForm.date,
            "amount": bytPostIncomeForm.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostIncome = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostIncome);
    return BYTPostIncome;
}());
exports.BYTPostIncome = BYTPostIncome;
var BYTPostAsset = (function () {
    function BYTPostAsset(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostAsset.prototype.bytPostAssetForm = function (bytPostAssetForm) {
        return this.authHttp.post('/add-asset', { "category": bytPostAssetForm.category,
            "description": bytPostAssetForm.description,
            "date": bytPostAssetForm.date,
            "amount": bytPostAssetForm.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostAsset = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostAsset);
    return BYTPostAsset;
}());
exports.BYTPostAsset = BYTPostAsset;
var BYTPostLiability = (function () {
    function BYTPostLiability(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostLiability.prototype.bytPostLiabilityForm = function (bytPostLiabilityForm) {
        return this.authHttp.post('/add-liability', { "category": bytPostLiabilityForm.category,
            "description": bytPostLiabilityForm.description,
            "date": bytPostLiabilityForm.date,
            "amount": bytPostLiabilityForm.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostLiability = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostLiability);
    return BYTPostLiability;
}());
exports.BYTPostLiability = BYTPostLiability;
var BYTPostBill = (function () {
    function BYTPostBill(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostBill.prototype.bytPostBillForm = function (bytPostBillForm) {
        return this.authHttp.post('/add-bill', { "category": bytPostBillForm.category,
            "description": bytPostBillForm.description,
            "subCategory": bytPostBillForm.subCategory,
            "date": bytPostBillForm.date,
            "amount": bytPostBillForm.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostBill = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostBill);
    return BYTPostBill;
}());
exports.BYTPostBill = BYTPostBill;
var BYTPostExpense = (function () {
    function BYTPostExpense(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPostExpense.prototype.bytPostExpenseForm = function (bytPostExpenseForm) {
        return this.authHttp.post('/add-monthly-expense', { "category": bytPostExpenseForm.category,
            "description": bytPostExpenseForm.description,
            "subCategory": bytPostExpenseForm.subCategory,
            "date": bytPostExpenseForm.date,
            "amount": bytPostExpenseForm.amount,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPostExpense = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPostExpense);
    return BYTPostExpense;
}());
exports.BYTPostExpense = BYTPostExpense;
var BYTRemoveTransaction = (function () {
    function BYTRemoveTransaction(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTRemoveTransaction.prototype.bytRemoveIncome = function (index) {
        return this.authHttp.put('/remove-income', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction.prototype.bytRemoveIncomeProjection = function (index) {
        return this.authHttp.put('/remove-income-projection', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction.prototype.bytRemoveBill = function (index) {
        return this.authHttp.put('/remove-bill', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction.prototype.bytRemoveBillProjection = function (index) {
        return this.authHttp.put('/remove-bill-projection', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction.prototype.bytRemoveExpense = function (index) {
        return this.authHttp.put('/remove-expense', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction.prototype.bytRemoveExpenseProjection = function (index) {
        return this.authHttp.put('/remove-expense-projection', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction.prototype.bytRemoveAsset = function (index) {
        return this.authHttp.put('/remove-asset', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction.prototype.bytRemoveLiability = function (index) {
        return this.authHttp.put('/remove-liability', { "index": index,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTRemoveTransaction = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTRemoveTransaction);
    return BYTRemoveTransaction;
}());
exports.BYTRemoveTransaction = BYTRemoveTransaction;
var BYTStripePayment = (function () {
    function BYTStripePayment(_http) {
        this._http = _http;
    }
    BYTStripePayment.prototype.bytPostStripePayment = function (token_id, email) {
        return this._http.post('/charge', { "token_id": token_id,
            "byt_email": email })
            .map(this.extractData)
            .catch(this.handleError);
    };
    BYTStripePayment.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    BYTStripePayment.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    BYTStripePayment = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BYTStripePayment);
    return BYTStripePayment;
}());
exports.BYTStripePayment = BYTStripePayment;
var BYTPlaid = (function () {
    function BYTPlaid(authHttp) {
        this.authHttp = authHttp;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTPlaid.prototype.bytPostBankTransactions = function (public_token) {
        return this.authHttp.post('/authenticate', { "public_token": public_token,
            "byt_email": this.userProfile.email })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    BYTPlaid = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], BYTPlaid);
    return BYTPlaid;
}());
exports.BYTPlaid = BYTPlaid;
//# sourceMappingURL=byt-dashboard-overview.service.js.map