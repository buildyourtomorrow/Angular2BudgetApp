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
var byt_dashboard_overview_service_2 = require("./byt-dashboard-overview.service");
var byt_bill_form_model_component_1 = require('./byt-bill-form-model.component');
var byt_dashboard_overview_service_3 = require("./byt-dashboard-overview.service");
/*
All of the bill categories need to update any time that a bill is either added or removed from all bills. Therefore, the billsCategoryTotals object is
reset then the for loops add up all categories once again. This happens on three occassions. When a bill is added or removed by the user as mentioned above
and when the component is first initialized.
*/
var BYTMonthlyProjectionsBillsComponent = (function () {
    function BYTMonthlyProjectionsBillsComponent(_getBYTUser, _bytPostBillProjection, _bytRemoveTransaction) {
        this._getBYTUser = _getBYTUser;
        this._bytPostBillProjection = _bytPostBillProjection;
        this._bytRemoveTransaction = _bytRemoveTransaction;
        this.submitted = false;
        this.model = new byt_bill_form_model_component_1.BYTBillFormModel(1, '', '', '', '', '');
        this.categories = ["Housing", "Health", "Transportation", "Utilities", "Insurance", "Debt", "Taxes",
            "Entertainment", "ChildCare"];
        this.subCategories = {
            Housing: [
                { name: "Rent" },
                { name: "Mortgage" },
                { name: "Vacation home" }
            ],
            Health: [
                { name: "Gym" },
                { name: "Yoga" },
                { name: "Pilates" },
                { name: "Boxing" },
                { name: "Martial arts" },
                { name: "Health Insurance" },
                { name: "Pharmacy" },
                { name: "Eyecare" },
                { name: "Doctor" },
                { name: "Dentist" }
            ],
            Transportation: [
                { name: "Metro Card" },
                { name: "EZ Pass" },
                { name: "Gas" },
                { name: "Parking" }
            ],
            Utilities: [
                { name: "Electric" },
                { name: "Water" },
                { name: "Garbage" },
                { name: "Home/Cell phone" },
                { name: "Internet" }
            ],
            Insurance: [
                { name: "Car insurance" },
                { name: "Homeowner's insurance" },
                { name: "Renter's insurance" },
                { name: "Life insurance" }
            ],
            Debt: [
                { name: "Credit card" },
                { name: "Student loan" },
                { name: "Personal loan" },
                { name: "Car loan" },
                { name: "Medical" }
            ],
            Taxes: [
                { name: "Personal" },
                { name: "Business" },
                { name: "House" }
            ],
            Entertainment: [
                { name: "Streaming movies/music" },
                { name: "Monthly subscriptions" }
            ],
            ChildCare: [
                { name: "Babysitter" },
                { name: "Daycare" },
                { name: "After School Programs" },
                { name: "Youth Leagues" },
                { name: "Medical" },
                { name: "Nutrition" }
            ]
        };
    }
    BYTMonthlyProjectionsBillsComponent.prototype.ngOnInit = function () {
        this.getBillProjections();
    };
    ;
    BYTMonthlyProjectionsBillsComponent.prototype.removeBillProjection = function (index) {
        this.billProjections.splice(index, 1);
        this._bytRemoveTransaction.bytRemoveBillProjection(index).subscribe(function (user) { });
        this.billProjectionsLength = this.billProjections.length;
    };
    ;
    BYTMonthlyProjectionsBillsComponent.prototype.getBillProjections = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.billProjections = user.billProjections;
            _this.billProjectionsLength = user.billProjections.length;
        });
    };
    BYTMonthlyProjectionsBillsComponent.prototype.submitBill = function () {
        this.submitted = true;
    };
    BYTMonthlyProjectionsBillsComponent.prototype.submitBillFinal = function () {
        this.submitted = false;
        this.billProjections.push(this.model);
        this.billProjectionsLength = this.billProjections.length;
        this._bytPostBillProjection.bytPostBillProjectionForm(this.model).subscribe(function (user) { });
        this.model = new byt_bill_form_model_component_1.BYTBillFormModel(1, '', '', '', '', '');
    };
    BYTMonthlyProjectionsBillsComponent = __decorate([
        core_1.Component({
            selector: 'byt-monthly-projections-bills',
            templateUrl: '/app/byt-monthly-projections-bills.component.html',
            styleUrls: ['app/byt-monthly-projections-bills.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser, byt_dashboard_overview_service_3.BYTPostBillProjection, byt_dashboard_overview_service_2.BYTRemoveTransaction])
    ], BYTMonthlyProjectionsBillsComponent);
    return BYTMonthlyProjectionsBillsComponent;
}());
exports.BYTMonthlyProjectionsBillsComponent = BYTMonthlyProjectionsBillsComponent;
//# sourceMappingURL=byt-monthly-projections-bills.component.js.map