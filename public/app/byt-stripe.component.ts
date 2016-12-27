import {Component} from '@angular/core';
import {BYTStripePayment} from "./byt-dashboard-overview.service";

@Component({
    templateUrl: '/app/byt-stripe.component.html',
    styleUrls: ['app/byt-stripe.component.css']
})
export class BYTStripeComponent {

	constructor (private _bytStripePayment: BYTStripePayment) {}

	openCheckout() {
		var handler = (<any>window).StripeCheckout.configure({
			key: 'pk_test_jIPsDMq98glog9Al3zo3dm3Q',
			locale: 'auto',
			image: "https://pbs.twimg.com/profile_images/787741887071260673/u_SdEGpc_400x400.jpg",
			token: token =>  {
				// You can access the token ID with `token.id`.
				// Get the token ID to your server-side code for use.
				//localStorage.setItem('stripe_token', token.id);
				//this1._bytStripePayment.bytPostStripePayment(token.id).subscribe(user => {})
				this._bytStripePayment.bytPostStripePayment(token.id).subscribe(user => {})
			}
		});

		handler.open({
			name: 'Build Your Tomorrow',
			description: 'One year subscription',
			amount: 5000			
		});

	}

}