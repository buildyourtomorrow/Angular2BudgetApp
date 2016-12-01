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
var BYTLastLiabilityEntryComponent = (function () {
    function BYTLastLiabilityEntryComponent(_getBYTUser) {
        this._getBYTUser = _getBYTUser;
    }
    BYTLastLiabilityEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.allLiabilities = user.liabilities;
            _this.allLiabilitiesLength = _this.allLiabilities.length;
            if (_this.allLiabilitiesLength > 0) {
                _this.lastTransactionDate = _this.allLiabilities[0].date;
            }
        });
    };
    BYTLastLiabilityEntryComponent.prototype.lastTransactionDateFunction = function (item) {
        this.allLiabilities.unshift(item);
        this.allLiabilitiesLength = this.allLiabilities.length;
        this.lastTransactionDate = this.allLiabilities[0].date;
    };
    BYTLastLiabilityEntryComponent.prototype.updateViewFunction = function (allItems) {
        this.allLiabilitiesLength = allItems.length;
        if (this.allLiabilitiesLength > 0) {
            this.lastTransactionDate = allItems[0].date;
        }
        else {
            this.lastTransactionDate = new Date;
        }
    };
    BYTLastLiabilityEntryComponent = __decorate([
        core_1.Component({
            selector: 'byt-last-liability-entry',
            templateUrl: '/app/byt-last-liability-entry.component.html',
            styleUrls: ['app/byt-last-liability-entry.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser])
    ], BYTLastLiabilityEntryComponent);
    return BYTLastLiabilityEntryComponent;
}());
exports.BYTLastLiabilityEntryComponent = BYTLastLiabilityEntryComponent;
//# sourceMappingURL=byt-last-liability-entry.component.js.map