import {Component, OnInit} from '@angular/core';

import {GetBYTUser} from './byt-dashboard-overview.service';
import {BYTBodyNavComponent} from './byt-body-nav.component';

@Component({
    selector: 'byt-dashboard-daily-budget',
    templateUrl: '/app/byt-dashboard-daily-budget.component.html',
    styleUrls: ['app/byt-dashboard-daily-budget.component.css']
})
export class BYTDashboardDailyBudgetComponent implements OnInit {
	dailyBudget: number;
	daysLeft: number;
	today: Date = new Date;
	periodStart: Date;
	periodEnd: Date;
	expenseProjectionsTotal: number;
	byt_show_section: boolean;

	constructor (private _getBYTUser: GetBYTUser) {}

	ngOnInit(){

		this._getBYTUser.getUser().subscribe(user => {
			this.daysLeft = user.daysLeft;
			this.expenseProjectionsTotal = user.expenseProjectionsTotal;
			this.calcPeriodStart();
			this.calcPeriodEnd();
			this.calcDailyBudget();			
		})
		
		let delay = 8000;
		setInterval(() => this.byt_show_section = true, delay);
	}

	calcPeriodStart(){
		let year = this.today.getFullYear();
		let month = this.today.getMonth();
		this.periodStart = new Date(year, month, 1);
	}
	calcPeriodEnd(){
		let year = this.today.getFullYear();
		let month = this.today.getMonth() + 1;
		this.periodEnd = new Date(year, month, 0);
	}
	calcDailyBudget(){
		console.log()
		this.dailyBudget = this.expenseProjectionsTotal / this.periodEnd.getDate();
	}
}