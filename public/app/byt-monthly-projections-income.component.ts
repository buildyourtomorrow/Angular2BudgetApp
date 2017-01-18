import {Component, OnInit, ViewChild} from '@angular/core';

import {GetBYTUser} from './byt-dashboard-overview.service';
import {BYTRemoveTransaction} from './byt-dashboard-overview.service';
import {BYTIncomeFormModel} from "./byt-income-form-model";
import {BYTPostIncomeProjections} from "./byt-dashboard-overview.service";


@Component({
	selector: 'byt-monthly-projections-income',
	templateUrl: '/app/byt-monthly-projections-income.component.html',
	styleUrls: ['app/byt-monthly-projections-income.component.css']
})
export class BYTMonthlyProjectionsIncomeComponent implements OnInit {
	allIncomeProjections: any[];
	byt_active: boolean = true;
	allIncomeProjectionsLength: number;
	submitted: boolean = false;
	model = new BYTIncomeFormModel(1, '', '', '', '');

	constructor (private _getBYTUser: GetBYTUser, private _bytPostIncomeProjections: BYTPostIncomeProjections, private _BYTRemoveTransaction: BYTRemoveTransaction) {}

	ngOnInit(){
		this.getAllIncomeProjections();

	};

	getAllIncomeProjections(){
		this._getBYTUser.getUser().subscribe(user => {
			this.allIncomeProjections = user.incomeProjections;
			this.allIncomeProjectionsLength = user.incomeProjections.length;
		})
	};

	removeIncomeProjection(index){
		this.allIncomeProjections.splice(index, 1);
		this._BYTRemoveTransaction.bytRemoveIncomeProjection(index).subscribe(user => {});
		this.allIncomeProjectionsLength = this.allIncomeProjections.length;
	};
	
	categories: Object[] = [
		{ name: "Wages" },
		{ name: "Rental Property" },
		{ name: "Limited Partnerships" },
		{ name: "Market Investments" },
		{ name: "Sole Proprietorship" },
		{ name: "Corporation" },
		{ name: "Child Support" },
		{ name: "Taxes" },
		{ name: "Refund" },
		{ name: "Other" }
	];

	submitIncome(){
		this.submitted = true;
	};

	submitIncomeFinal(){
		this.submitted = false;
		this.allIncomeProjections.push(this.model);
		this.allIncomeProjectionsLength = this.allIncomeProjections.length;
		this._bytPostIncomeProjections.bytPostIncomeProjectionForm(this.model).subscribe(user => {})
		this.model = new BYTIncomeFormModel(1, '', '', '', '');
	};

}