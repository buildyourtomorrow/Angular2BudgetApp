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
	totalLiabilities: number;
	constructor (private _getBYTUser: GetBYTUser) {}

	ngOnInit(){
		this._getBYTUser.getUser().subscribe(user => {
			this.totalAssets = user.totalAssets;
			this.totalLiabilities = user.totalLiabilities;				
		})
	}

}