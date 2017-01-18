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
var BYTMonthlyProjectionsNavComponent = (function () {
    function BYTMonthlyProjectionsNavComponent(_getBYTUser) {
        this._getBYTUser = _getBYTUser;
    }
    BYTMonthlyProjectionsNavComponent.prototype.addRemoveSpinner = function () {
        var _this = this;
        this.byt_spinner = !this.byt_spinner;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.byt_spinner = !_this.byt_spinner;
        });
    };
    BYTMonthlyProjectionsNavComponent.prototype.addRemoveSpinnerOne = function () {
        var _this = this;
        this.byt_spinner_one = !this.byt_spinner_one;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.byt_spinner_one = !_this.byt_spinner_one;
        });
    };
    BYTMonthlyProjectionsNavComponent.prototype.addRemoveSpinnerTwo = function () {
        var _this = this;
        this.byt_spinner_two = !this.byt_spinner_two;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.byt_spinner_two = !_this.byt_spinner_two;
        });
    };
    BYTMonthlyProjectionsNavComponent.prototype.addRemoveSpinnerThree = function () {
        var _this = this;
        this.byt_spinner_three = !this.byt_spinner_three;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.byt_spinner_three = !_this.byt_spinner_three;
        });
    };
    BYTMonthlyProjectionsNavComponent = __decorate([
        core_1.Component({
            selector: 'byt-monthly-projections-nav',
            templateUrl: '/app/byt-monthly-projections-nav.component.html',
            styleUrls: ['app/byt-monthly-projections-nav.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser])
    ], BYTMonthlyProjectionsNavComponent);
    return BYTMonthlyProjectionsNavComponent;
}());
exports.BYTMonthlyProjectionsNavComponent = BYTMonthlyProjectionsNavComponent;
//# sourceMappingURL=byt-monthly-projections-nav.component.js.map