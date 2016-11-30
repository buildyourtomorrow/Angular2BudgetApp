import {Component, OnInit } from '@angular/core';

import {GetBYTUser} from './byt-dashboard-overview.service';
 
@Component({
	selector: 'byt-last-asset-entry',
	templateUrl: '/app/byt-last-asset-entry.component.html',
	styleUrls: ['app/byt-last-asset-entry.component.css']
})
export class BYTLastAssetEntryComponent implements OnInit {
	lastTransactionDate: Date;
	allAssets: Array<Object>;
	allAssetsLength: number;

	constructor (private _getBYTUser: GetBYTUser) {}

	ngOnInit(){
		this._getBYTUser.getUser().subscribe(user => {
			this.allAssets = user.assets;
			this.allAssetsLength = this.allAssets.length;
			if(this.allAssetsLength > 0){
				this.lastTransactionDate = this.allAssets[0].date;
			}			
		});
	}

	lastTransactionDateFunction(expense){
		this.allAssets.unshift(expense)
		this.allAssetsLength = this.allAssets.length;
		this.lastTransactionDate = this.allAssets[0].date;
	}

	updateViewFunction(allAssets){
		this.allAssetsLength = allAssets.length;
		if(this.allAssetsLength > 0){
			this.lastTransactionDate = allAssets[0].date;	
		}else{
			this.lastTransactionDate = new Date;
		}				
	}

}