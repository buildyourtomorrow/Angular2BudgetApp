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
var BYTActionStep = (function () {
    function BYTActionStep(_getBYTUser) {
        this._getBYTUser = _getBYTUser;
    }
    BYTActionStep.prototype.ngOnInit = function () {
        this.getAllAssetsAndLiabilities();
    };
    ;
    BYTActionStep.prototype.getAllAssetsAndLiabilities = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.allAssets = user.assets;
            _this.allAssetsLength = user.assets.length;
            _this.assetCategoryTotals = [
                { category: "Cash - checking accounts", total: 0 },
                { category: "Cash - savings accounts", total: 0 },
                { category: "Special deposit accounts", total: 0 },
                { category: "Market investments", total: 0 },
                { category: "Certificate of deposit", total: 0 },
                { category: "Life insurance (cash value)", total: 0 },
                { category: "Mutual funds", total: 0 },
                { category: "Car", total: 0 },
                { category: "Equity in private company", total: 0 },
                { category: "Other", total: 0 }
            ];
            for (var i = 0; i < _this.allAssets.length; i++) {
                if (_this.allAssets[i].category === "Cash - checking accounts") {
                    _this.assetCategoryTotals[0].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Cash - savings accounts") {
                    _this.assetCategoryTotals[1].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Special deposit accounts") {
                    _this.assetCategoryTotals[2].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Market investments") {
                    _this.assetCategoryTotals[3].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Certificate of deposit") {
                    _this.assetCategoryTotals[4].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Life insurance (cash value)") {
                    _this.assetCategoryTotals[5].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Mutual funds") {
                    _this.assetCategoryTotals[6].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Car") {
                    _this.assetCategoryTotals[7].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Equity in private company") {
                    _this.assetCategoryTotals[8].total += _this.allAssets[i].amount;
                }
                ;
                if (_this.allAssets[i].category === "Other") {
                    _this.assetCategoryTotals[9].total += _this.allAssets[i].amount;
                }
                ;
            }
            ;
            _this.allLiabilities = user.liabilities;
            _this.allLiabilitiesLength = user.liabilities.length;
            _this.billsTotal = user.billsTotal;
            _this.liabilityCategoryTotals = [
                { category: "Credit card debt", total: 0 },
                { category: "Medical debt", total: 0 },
                { category: "Unpaid rent", total: 0 },
                { category: "Unpaid utilities", total: 0 },
                { category: "Auto loan", total: 0 },
                { category: "Personal loan", total: 0 },
                { category: "Consolidation loan", total: 0 },
                { category: "Student loan", total: 0 },
                { category: "Home loan", total: 0 },
                { category: "Business loan", total: 0 },
                { category: "Other", total: 0 }
            ];
            for (var i = 0; i < _this.allLiabilities.length; i++) {
                if (_this.allLiabilities[i].category === "Credit card debt") {
                    _this.liabilityCategoryTotals[0].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Medical debt") {
                    _this.liabilityCategoryTotals[1].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Unpaid rent") {
                    _this.liabilityCategoryTotals[2].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Unpaid utilities") {
                    _this.liabilityCategoryTotals[3].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Auto loan") {
                    _this.liabilityCategoryTotals[4].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Personal loan") {
                    _this.liabilityCategoryTotals[5].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Consolidation loan") {
                    _this.liabilityCategoryTotals[6].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Student loan") {
                    _this.liabilityCategoryTotals[7].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Home loan") {
                    _this.liabilityCategoryTotals[8].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Business loan") {
                    _this.liabilityCategoryTotals[9].total += _this.allLiabilities[i].amount;
                }
                ;
                if (_this.allLiabilities[i].category === "Other") {
                    _this.liabilityCategoryTotals[10].total += _this.allLiabilities[i].amount;
                }
                ;
            }
            ;
            if (!_this.assetCategoryTotals[0].total && !_this.assetCategoryTotals[1].total) {
                _this.bytActionStep = "Add assets in the Net Worth tab";
            }
            else {
                if ((_this.assetCategoryTotals[0].total + _this.assetCategoryTotals[1].total) < (_this.billsTotal * 12)) {
                    _this.bytActionStep = "Raise cash";
                }
                else {
                    if ((_this.liabilityCategoryTotals[0].total + _this.liabilityCategoryTotals[1].total + _this.liabilityCategoryTotals[2].total +
                        _this.liabilityCategoryTotals[3].total + _this.liabilityCategoryTotals[5].total + _this.liabilityCategoryTotals[6].total +
                        _this.liabilityCategoryTotals[6].total) > 0) {
                        _this.bytActionStep = "Without touching your savings account, reduce debt";
                    }
                    else {
                        _this.bytActionStep = "Look for investment opportunities";
                    }
                }
            }
        });
    };
    BYTActionStep = __decorate([
        core_1.Component({
            selector: 'byt-action-step',
            templateUrl: '/app/byt-action-step.component.html',
            styleUrls: ['app/byt-action-step.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser])
    ], BYTActionStep);
    return BYTActionStep;
}());
exports.BYTActionStep = BYTActionStep;
//# sourceMappingURL=byt-action-step.component.js.map