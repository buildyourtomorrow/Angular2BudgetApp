import {Component, OnInit } from '@angular/core';

import {GetBYTUser} from './byt-dashboard-overview.service';
 
@Component({
	selector: 'byt-last-liability-entry',
	templateUrl: '/app/byt-last-liability-entry.component.html',
	styleUrls: ['app/byt-last-liability-entry.component.css']
})
export class BYTLastLiabilityEntryComponent implements OnInit {
	lastTransactionDate: Date;
	allLiabilities: Array<Object>;
	allLiabilitiesLength: number;

	constructor (private _getBYTUser: GetBYTUser) {}

	ngOnInit(){
		this._getBYTUser.getUser().subscribe(user => {
			this.allLiabilities = user.liabilities;
			this.allLiabilitiesLength = this.allLiabilities.length;
			if(this.allLiabilitiesLength > 0){
				this.lastTransactionDate = this.allLiabilities[0].date;
			}			
		});
	}

	lastTransactionDateFunction(item){
		this.allLiabilities.unshift(item)
		this.allLiabilitiesLength = this.allLiabilities.length;
		this.lastTransactionDate = this.allLiabilities[0].date;
	}

	updateViewFunction(allItems){
		this.allLiabilitiesLength = allItems.length;
		if(this.allLiabilitiesLength > 0){
			this.lastTransactionDate = allItems[0].date;	
		}else{
			this.lastTransactionDate = new Date;
		}				
	}

}