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
var core_1 = require('@angular/core');
var byt_dashboard_overview_service_1 = require('./byt-dashboard-overview.service');
var byt_dashboard_overview_service_2 = require('./byt-dashboard-overview.service');
var byt_income_form_model_1 = require("./byt-income-form-model");
var byt_dashboard_overview_service_3 = require("./byt-dashboard-overview.service");
var BYTMonthlyProjectionsIncomeComponent = (function () {
    function BYTMonthlyProjectionsIncomeComponent(_getBYTUser, _bytPostIncomeProjections, _BYTRemoveTransaction) {
        this._getBYTUser = _getBYTUser;
        this._bytPostIncomeProjections = _bytPostIncomeProjections;
        this._BYTRemoveTransaction = _BYTRemoveTransaction;
        this.byt_active = true;
        this.submitted = false;
        this.model = new byt_income_form_model_1.BYTIncomeFormModel(1, '', '', '', '');
        this.categories = [
            { name: "Wages" },
            { name: "Rental Property" },
            { name: "Limited Partnerships" },
            { name: "Market Investments" },
            { name: "Sole Proprietorship" },
            { name: "Corporation" },
            { name: "Child Support" },
            { name: "Taxes" },
            { name: "Refund" },
            { name: "Other" }
        ];
    }
    BYTMonthlyProjectionsIncomeComponent.prototype.ngOnInit = function () {
        this.getAllIncomeProjections();
    };
    ;
    BYTMonthlyProjectionsIncomeComponent.prototype.getAllIncomeProjections = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.allIncomeProjections = user.incomeProjections;
            _this.allIncomeProjectionsLength = user.incomeProjections.length;
        });
    };
    ;
    BYTMonthlyProjectionsIncomeComponent.prototype.removeIncomeProjection = function (index) {
        this.allIncomeProjections.splice(index, 1);
        this._BYTRemoveTransaction.bytRemoveIncomeProjection(index).subscribe(function (user) { });
        this.allIncomeProjectionsLength = this.allIncomeProjections.length;
    };
    ;
    BYTMonthlyProjectionsIncomeComponent.prototype.submitIncome = function () {
        this.submitted = true;
    };
    ;
    BYTMonthlyProjectionsIncomeComponent.prototype.submitIncomeFinal = function () {
        this.submitted = false;
        this.allIncomeProjections.push(this.model);
        this.allIncomeProjectionsLength = this.allIncomeProjections.length;
        this._bytPostIncomeProjections.bytPostIncomeProjectionForm(this.model).subscribe(function (user) { });
        this.model = new byt_income_form_model_1.BYTIncomeFormModel(1, '', '', '', '');
    };
    ;
    BYTMonthlyProjectionsIncomeComponent = __decorate([
        core_1.Component({
            selector: 'byt-monthly-projections-income',
            templateUrl: '/app/byt-monthly-projections-income.component.html',
            styleUrls: ['app/byt-monthly-projections-income.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser, byt_dashboard_overview_service_3.BYTPostIncomeProjections, byt_dashboard_overview_service_2.BYTRemoveTransaction])
    ], BYTMonthlyProjectionsIncomeComponent);
    return BYTMonthlyProjectionsIncomeComponent;
}());
exports.BYTMonthlyProjectionsIncomeComponent = BYTMonthlyProjectionsIncomeComponent;
//# sourceMappingURL=byt-monthly-projections-income.component.js.map