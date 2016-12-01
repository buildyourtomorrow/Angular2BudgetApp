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
var byt_last_liability_entry_component_1 = require('./byt-last-liability-entry.component');
var BYTLiabilityComponent = (function () {
    function BYTLiabilityComponent(_getBYTUser, _BYTRemoveTransaction) {
        this._getBYTUser = _getBYTUser;
        this._BYTRemoveTransaction = _BYTRemoveTransaction;
        this.byt_active = true;
    }
    BYTLiabilityComponent.prototype.ngOnInit = function () {
        this.getAllLiabilities();
    };
    ;
    BYTLiabilityComponent.prototype.getAllLiabilities = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.allLiabilities = user.liabilities;
            _this.allLiabilitiesLength = user.liabilities.length;
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
        });
    };
    BYTLiabilityComponent.prototype.childLiabilityForm = function ($event) {
        this.allLiabilities.unshift($event);
        this.allLiabilitiesLength = this.allLiabilities.length;
        this._lastLiabilityEntry.lastTransactionDateFunction($event);
        this.calcLiabilityCategoryTotals();
    };
    BYTLiabilityComponent.prototype.removeLiability = function (index) {
        this.allLiabilities.splice(index, 1);
        this.calcLiabilityCategoryTotals();
        this._BYTRemoveTransaction.bytRemoveLiability(index).subscribe(function (user) { });
        this.allLiabilitiesLength = this.allLiabilities.length;
        this._lastLiabilityEntry.updateViewFunction(this.allLiabilities);
        if (this.allLiabilitiesLength === 0) {
            this.byt_active = true;
        }
    };
    ;
    BYTLiabilityComponent.prototype.calcLiabilityCategoryTotals = function () {
        this.liabilityCategoryTotals = [
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
        for (var i = 0; i < this.allLiabilities.length; i++) {
            if (this.allLiabilities[i].category === "Credit card debt") {
                this.liabilityCategoryTotals[0].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Medical debt") {
                this.liabilityCategoryTotals[1].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Unpaid rent") {
                this.liabilityCategoryTotals[2].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Unpaid utilities") {
                this.liabilityCategoryTotals[3].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Auto loan") {
                this.liabilityCategoryTotals[4].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Personal loan") {
                this.liabilityCategoryTotals[5].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Consolidation loan") {
                this.liabilityCategoryTotals[6].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Student loan") {
                this.liabilityCategoryTotals[7].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Home loan") {
                this.liabilityCategoryTotals[8].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Business loan") {
                this.liabilityCategoryTotals[9].total += this.allLiabilities[i].amount;
            }
            ;
            if (this.allLiabilities[i].category === "Other") {
                this.liabilityCategoryTotals[10].total += this.allLiabilities[i].amount;
            }
            ;
        }
        ;
    };
    __decorate([
        core_1.ViewChild(byt_last_liability_entry_component_1.BYTLastLiabilityEntryComponent), 
        __metadata('design:type', byt_last_liability_entry_component_1.BYTLastLiabilityEntryComponent)
    ], BYTLiabilityComponent.prototype, "_lastLiabilityEntry", void 0);
    BYTLiabilityComponent = __decorate([
        core_1.Component({
            selector: 'byt-liabilities',
            templateUrl: '/app/byt-liability.component.html',
            styleUrls: ['app/byt-liability.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser, byt_dashboard_overview_service_2.BYTRemoveTransaction])
    ], BYTLiabilityComponent);
    return BYTLiabilityComponent;
}());
exports.BYTLiabilityComponent = BYTLiabilityComponent;
//# sourceMappingURL=byt-liability.component.js.map