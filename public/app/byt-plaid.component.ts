import {Component, OnInit} from '@angular/core';

import {BYTPlaid} from './byt-dashboard-overview.service';

@Component({
	selector: 'byt-plaid',
	templateUrl: '/app/byt-plaid.component.html',
	styleUrls: ['app/byt-plaid.component.css']
})
export class BYTPlaidComponent implements OnInit {

	transactions: any;

	constructor (private _bytPlaid: BYTPlaid) {}

	ngOnInit(){};

	plaidClient(){
		var linkHandler = (<any>window).Plaid.create({
			env: 'tartan',
			clientName: 'Build Your Tomorrow',
			key: '0cde5ad06e72646c0a7a2587ab9062',
			product: 'connect',
			longtail: true,
			onSuccess: public_token => {
				this._bytPlaid.bytPostBankTransactions(public_token).subscribe(data => {
					this.transactions = data;
				});
			},
			onExit: function(err, metadata) {
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

	}
	
}