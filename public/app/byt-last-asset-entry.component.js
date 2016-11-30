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
var BYTLastAssetEntryComponent = (function () {
    function BYTLastAssetEntryComponent(_getBYTUser) {
        this._getBYTUser = _getBYTUser;
    }
    BYTLastAssetEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.allAssets = user.assets;
            _this.allAssetsLength = _this.allAssets.length;
            if (_this.allAssetsLength > 0) {
                _this.lastTransactionDate = _this.allAssets[0].date;
            }
        });
    };
    BYTLastAssetEntryComponent.prototype.lastTransactionDateFunction = function (expense) {
        this.allAssets.unshift(expense);
        this.allAssetsLength = this.allAssets.length;
        this.lastTransactionDate = this.allAssets[0].date;
    };
    BYTLastAssetEntryComponent.prototype.updateViewFunction = function (allAssets) {
        this.allAssetsLength = allAssets.length;
        if (this.allAssetsLength > 0) {
            this.lastTransactionDate = allAssets[0].date;
        }
        else {
            this.lastTransactionDate = new Date;
        }
    };
    BYTLastAssetEntryComponent = __decorate([
        core_1.Component({
            selector: 'byt-last-asset-entry',
            templateUrl: '/app/byt-last-asset-entry.component.html',
            styleUrls: ['app/byt-last-asset-entry.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser])
    ], BYTLastAssetEntryComponent);
    return BYTLastAssetEntryComponent;
}());
exports.BYTLastAssetEntryComponent = BYTLastAssetEntryComponent;
//# sourceMappingURL=byt-last-asset-entry.component.js.map