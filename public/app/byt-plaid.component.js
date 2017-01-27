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
var BYTPlaidComponent = (function () {
    function BYTPlaidComponent(_bytPlaid) {
        this._bytPlaid = _bytPlaid;
    }
    BYTPlaidComponent.prototype.ngOnInit = function () { };
    ;
    BYTPlaidComponent.prototype.plaidClient = function () {
        var _this = this;
        var linkHandler = window.Plaid.create({
            env: 'tartan',
            clientName: 'Build Your Tomorrow',
            key: '0cde5ad06e72646c0a7a2587ab9062',
            product: 'connect',
            longtail: true,
            onSuccess: function (public_token) {
                _this._bytPlaid.bytPostBankTransactions(public_token).subscribe(function (data) {
                    _this.transactions = data;
                });
            },
            onExit: function (err, metadata) {
                // The user exited the Link flow.
                if (err != null) {
                    // The user encountered a Plaid API error prior to exiting.
                    console.log(err);
                }
                // metadata contains information about the institution
                // that the user selected and the most recent API request IDs.
                // Storing this information can be helpful for support.
            }
        });
        linkHandler.open();
    };
    BYTPlaidComponent = __decorate([
        core_1.Component({
            selector: 'byt-plaid',
            templateUrl: '/app/byt-plaid.component.html',
            styleUrls: ['app/byt-plaid.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.BYTPlaid])
    ], BYTPlaidComponent);
    return BYTPlaidComponent;
}());
exports.BYTPlaidComponent = BYTPlaidComponent;
//# sourceMappingURL=byt-plaid.component.js.map