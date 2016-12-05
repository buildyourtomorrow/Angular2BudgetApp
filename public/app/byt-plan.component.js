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
var BYTPlanComponent = (function () {
    function BYTPlanComponent() {
        this.rawAssetArray = [
            {
                name: 'Someone',
                description: 'Personal checking account @ Chase',
                remark: 'This is some text'
            }
        ];
    }
    BYTPlanComponent.prototype.ngOnInit = function () { };
    ;
    BYTPlanComponent.prototype.addAsset = function () {
        this.asset;
    };
    BYTPlanComponent = __decorate([
        core_1.Component({
            selector: 'byt-plan',
            templateUrl: '/app/byt-plan.component.html',
            styleUrls: ['app/byt-plan.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BYTPlanComponent);
    return BYTPlanComponent;
}());
exports.BYTPlanComponent = BYTPlanComponent;
//# sourceMappingURL=byt-plan.component.js.map