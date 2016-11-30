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
var byt_asset_form_model_component_1 = require('./byt-asset-form-model.component');
var byt_dashboard_overview_service_1 = require("./byt-dashboard-overview.service");
var BYTAssetFormComponent = (function () {
    function BYTAssetFormComponent(_bytPostAsset) {
        this._bytPostAsset = _bytPostAsset;
        this.assetForm = new core_1.EventEmitter();
        this.submitted = false;
        this.model = new byt_asset_form_model_component_1.BYTAssetFormModel(1, '', new Date, '', '');
        this.categories = [
            { name: "Cash - checking accounts" },
            { name: "Cash - savings accounts" },
            { name: "Special deposit accounts" },
            { name: "Market investments" },
            { name: "Certificate of deposit" },
            { name: "Life insurance (cash value)" },
            { name: "Mutual funds" },
            { name: "Car" },
            { name: "Equity in private company" },
            { name: "Other" }
        ];
    }
    BYTAssetFormComponent.prototype.submitAsset = function () {
        this.submitted = true;
    };
    BYTAssetFormComponent.prototype.submitAssetFinal = function () {
        this.submitted = false;
        this.assetForm.emit(this.model);
        this._bytPostAsset.bytPostAssetForm(this.model).subscribe(function (user) { });
        this.model = new byt_asset_form_model_component_1.BYTAssetFormModel(1, '', new Date, '', '');
    };
    BYTAssetFormComponent = __decorate([
        core_1.Component({
            selector: 'byt-asset-form',
            templateUrl: '/app/byt-asset-form.component.html',
            styleUrls: ['app/byt-asset-form.component.css'],
            outputs: ['assetForm']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.BYTPostAsset])
    ], BYTAssetFormComponent);
    return BYTAssetFormComponent;
}());
exports.BYTAssetFormComponent = BYTAssetFormComponent;
//# sourceMappingURL=byt-assets-form.component.js.map