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
//import { Router } from '@angular/router';
var byt_dashboard_overview_service_1 = require('./byt-dashboard-overview.service');
var BYTNetWorthComponent = (function () {
    function BYTNetWorthComponent(_getBYTUser) {
        this._getBYTUser = _getBYTUser;
    }
    BYTNetWorthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.totalAssets = user.totalAssets;
            _this.totalLiabilities = user.totalLiabilities;
        });
    };
    BYTNetWorthComponent = __decorate([
        core_1.Component({
            selector: 'byt-net-worth',
            templateUrl: '/app/byt-net-worth.component.html',
            styleUrls: ['app/byt-net-worth.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser])
    ], BYTNetWorthComponent);
    return BYTNetWorthComponent;
}());
exports.BYTNetWorthComponent = BYTNetWorthComponent;
//# sourceMappingURL=byt-net-worth.component.js.map