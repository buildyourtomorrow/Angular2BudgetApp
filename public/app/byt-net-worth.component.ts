import {Component, OnInit} from '@angular/core';
//import { Router } from '@angular/router';

import {GetBYTUser} from './byt-dashboard-overview.service';
 
@Component({
	selector: 'byt-net-worth',
	templateUrl: '/app/byt-net-worth.component.html',
	styleUrls: ['app/byt-net-worth.component.css']
})
export class BYTNetWorthComponent implements OnInit {
	totalAssets: number;
	totalIncome: number;
	totalLiabilities: number;
	totalExpenses: number;
	totalBills: number;

	constructor (private _getBYTUser: GetBYTUser) {}

	ngOnInit(){
		this._getBYTUser.getUser().subscribe(user => {
			this.totalAssets = user.totalAssets;
			this.totalLiabilities = user.totalLiabilities;
			this.totalIncome = user.totalIncome;
			this.totalExpenses = user.totalSpent;
			this.totalBills = user.billsTotal;
		})
	}

}