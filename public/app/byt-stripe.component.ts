import {Component} from '@angular/core';
import {BYTStripePayment} from "./byt-dashboard-overview.service";
import { Router } from '@angular/router';

@Component({
	selector: 'byt-stripe',
    templateUrl: '/app/byt-stripe.component.html',
    styleUrls: ['app/byt-stripe.component.css']
})
export class BYTStripeComponent {

	constructor (private _bytStripePayment: BYTStripePayment, private router: Router) {}
	userProfile: any = JSON.parse(localStorage.getItem('profile'));

	openCheckout() {
		var handler = (<any>window).StripeCheckout.configure({
			key: 'pk_test_jIPsDMq98glog9Al3zo3dm3Q',
			locale: 'auto',
			email: this.userProfile.email,
			image: "https://pbs.twimg.com/profile_images/787741887071260673/u_SdEGpc_400x400.jpg",
			token: token =>  {
				// You can access the token ID with `token.id`.
				// Get the token ID to your server-side code for use.
				//localStorage.setItem('stripe_token', token.id);
				//this1._bytStripePayment.bytPostStripePayment(token.id).subscribe(user => {})
				this._bytStripePayment.bytPostStripePayment(token.id, this.userProfile.email).subscribe(data => {})
			}
		});

		handler.open({
			name: 'Build Your Tomorrow',
			description: 'Work with Eli 1-on-1 ($200/month)',				
		});

	}

}