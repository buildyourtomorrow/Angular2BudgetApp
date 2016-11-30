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
var byt_last_asset_entry_component_1 = require('./byt-last-asset-entry.component');
var BYTAssetComponent = (function () {
    function BYTAssetComponent(_getBYTUser, _BYTRemoveTransaction) {
        this._getBYTUser = _getBYTUser;
        this._BYTRemoveTransaction = _BYTRemoveTransaction;
        this.byt_active = true;
    }
    BYTAssetComponent.prototype.ngOnInit = function () {
        this.getAllAssets();
    };
    ;
    BYTAssetComponent.prototype.getAllAssets = function () {
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
        });
    };
    BYTAssetComponent.prototype.childAssetForm = function ($event) {
        this.allAssets.unshift($event);
        this.allAssetsLength = this.allAssets.length;
        this._lastAssetEntry.lastTransactionDateFunction($event);
        this.calcAssetCategoryTotals();
    };
    BYTAssetComponent.prototype.removeAsset = function (index) {
        this.allAssets.splice(index, 1);
        this.calcAssetCategoryTotals();
        this._BYTRemoveTransaction.bytRemoveAsset(index).subscribe(function (user) { });
        this.allAssetsLength = this.allAssets.length;
        this._lastAssetEntry.updateViewFunction(this.allAssets);
        if (this.allAssetsLength === 0) {
            this.byt_active = true;
        }
    };
    ;
    BYTAssetComponent.prototype.calcAssetCategoryTotals = function () {
        this.assetCategoryTotals = [
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
        for (var i = 0; i < this.allAssets.length; i++) {
            if (this.allAssets[i].category === "Cash - checking accounts") {
                this.assetCategoryTotals[0].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Cash - savings accounts") {
                this.assetCategoryTotals[1].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Special deposit accounts") {
                this.assetCategoryTotals[2].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Market investments") {
                this.assetCategoryTotals[3].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Certificate of deposit") {
                this.assetCategoryTotals[4].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Life insurance (cash value)") {
                this.assetCategoryTotals[5].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Mutual funds") {
                this.assetCategoryTotals[6].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Car") {
                this.assetCategoryTotals[7].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Equity in private company") {
                this.assetCategoryTotals[8].total += this.allAssets[i].amount;
            }
            ;
            if (this.allAssets[i].category === "Other") {
                this.assetCategoryTotals[9].total += this.allAssets[i].amount;
            }
            ;
        }
        ;
    };
    __decorate([
        core_1.ViewChild(byt_last_asset_entry_component_1.BYTLastAssetEntryComponent), 
        __metadata('design:type', byt_last_asset_entry_component_1.BYTLastAssetEntryComponent)
    ], BYTAssetComponent.prototype, "_lastAssetEntry", void 0);
    BYTAssetComponent = __decorate([
        core_1.Component({
            selector: 'byt-assets',
            templateUrl: '/app/byt-assets.component.html',
            styleUrls: ['app/byt-assets.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser, byt_dashboard_overview_service_2.BYTRemoveTransaction])
    ], BYTAssetComponent);
    return BYTAssetComponent;
}());
exports.BYTAssetComponent = BYTAssetComponent;
//# sourceMappingURL=byt-assets.component.js.map