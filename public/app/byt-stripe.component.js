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
var byt_dashboard_overview_service_1 = require("./byt-dashboard-overview.service");
var router_1 = require('@angular/router');
var BYTStripeComponent = (function () {
    function BYTStripeComponent(_bytStripePayment, router) {
        this._bytStripePayment = _bytStripePayment;
        this.router = router;
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    BYTStripeComponent.prototype.openCheckout = function () {
        var _this = this;
        var handler = window.StripeCheckout.configure({
            key: 'pk_live_QEKsPYdgVWVKalp1jNaxTpMc',
            locale: 'auto',
            email: this.userProfile.email,
            image: "https://pbs.twimg.com/profile_images/787741887071260673/u_SdEGpc_400x400.jpg",
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                //localStorage.setItem('stripe_token', token.id);
                //this1._bytStripePayment.bytPostStripePayment(token.id).subscribe(user => {})
                _this._bytStripePayment.bytPostStripePayment(token.id, _this.userProfile.email).subscribe(function (data) { });
            }
        });
        handler.open({
            name: 'Build Your Tomorrow',
            description: 'Work with a coach $59/month',
        });
    };
    BYTStripeComponent = __decorate([
        core_1.Component({
            selector: 'byt-stripe',
            templateUrl: '/app/byt-stripe.component.html',
            styleUrls: ['app/byt-stripe.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.BYTStripePayment, router_1.Router])
    ], BYTStripeComponent);
    return BYTStripeComponent;
}());
exports.BYTStripeComponent = BYTStripeComponent;
//# sourceMappingURL=byt-stripe.component.js.map