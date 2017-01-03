import {Component, OnInit} from '@angular/core';

import {GetBYTUser} from './byt-dashboard-overview.service';

@Component({
    selector: 'byt-action-step',
    templateUrl: '/app/byt-action-step.component.html',
    styleUrls: ['app/byt-action-step.component.css']
})
export class BYTActionStep implements OnInit {
	totalIncome: number;
	totalBills: number;
	totalExpenses: number;
	totalCash: number;
	totalHighInterestDebt: number;
	bytActionStep: string;

	allAssets: any[];
	assetCategoryTotals: any[];
	allAssetsLength: number;

	allLiabilities: any[];
	liabilityCategoryTotals: any[];
	allLiabilitiesLength: number;
	billsTotal: number;
	colorOfActionStep: string;

	constructor (private _getBYTUser: GetBYTUser) {}

	ngOnInit(){
		this.getAllAssetsAndLiabilities();
	};

	getAllAssetsAndLiabilities(){
		this._getBYTUser.getUser().subscribe(user => {
			this.allAssets = user.assets;
			this.allAssetsLength = user.assets.length;

			this.assetCategoryTotals = [
				{category: "Cash - checking accounts", total: 0},
				{category: "Cash - savings accounts", total: 0},
				{category: "Special deposit accounts", total: 0},
				{category: "Market investments", total: 0},
				{category: "Certificate of deposit", total: 0},
				{category: "Life insurance (cash value)", total: 0},
				{category: "Mutual funds", total: 0},
				{category: "Car", total: 0},
				{category: "Equity in private company", total: 0},
				{category: "Other", total: 0}
			];

			for (let i = 0; i < this.allAssets.length; i++){
				if (this.allAssets[i].category === "Cash - checking accounts") {
					this.assetCategoryTotals[0].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Cash - savings accounts") {
					this.assetCategoryTotals[1].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Special deposit accounts") {
					this.assetCategoryTotals[2].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Market investments") {
					this.assetCategoryTotals[3].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Certificate of deposit") {
					this.assetCategoryTotals[4].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Life insurance (cash value)") {
					this.assetCategoryTotals[5].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Mutual funds") {
					this.assetCategoryTotals[6].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Car") {
					this.assetCategoryTotals[7].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Equity in private company") {
					this.assetCategoryTotals[8].total += this.allAssets[i].amount;
				};
				if (this.allAssets[i].category === "Other") {
					this.assetCategoryTotals[9].total += this.allAssets[i].amount;
				};
			};

			this.allLiabilities = user.liabilities;
			this.allLiabilitiesLength = user.liabilities.length;
			this.billsTotal = user.billsTotal;

			this.liabilityCategoryTotals = [
				{category: "Credit card debt", total: 0},
				{category: "Medical debt", total: 0},
				{category: "Unpaid rent", total: 0},
				{category: "Unpaid utilities", total: 0},
				{category: "Auto loan", total: 0},
				{category: "Personal loan", total: 0},
				{category: "Consolidation loan", total: 0},
				{category: "Student loan", total: 0},
				{category: "Home loan", total: 0},
				{category: "Business loan", total: 0},
				{category: "Other", total: 0}
			];

			for (let i = 0; i < this.allLiabilities.length; i++){
				if (this.allLiabilities[i].category === "Credit card debt") {
					this.liabilityCategoryTotals[0].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Medical debt") {
					this.liabilityCategoryTotals[1].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Unpaid rent") {
					this.liabilityCategoryTotals[2].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Unpaid utilities") {
					this.liabilityCategoryTotals[3].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Auto loan") {
					this.liabilityCategoryTotals[4].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Personal loan") {
					this.liabilityCategoryTotals[5].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Consolidation loan") {
					this.liabilityCategoryTotals[6].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Student loan") {
					this.liabilityCategoryTotals[7].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Home loan") {
					this.liabilityCategoryTotals[8].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Business loan") {
					this.liabilityCategoryTotals[9].total += this.allLiabilities[i].amount;
				};
				if (this.allLiabilities[i].category === "Other") {
					this.liabilityCategoryTotals[10].total += this.allLiabilities[i].amount;
				};
			};
			if(!this.assetCategoryTotals[0].total && !this.assetCategoryTotals[1].total){
				this.bytActionStep = "Add assets in the Net Worth tab";
			} else {
				if( (this.assetCategoryTotals[0].total + this.assetCategoryTotals[1].total) < (this.billsTotal * 12) ) {
					this.bytActionStep = "Raise cash";
				} else {
					if(  (this.liabilityCategoryTotals[0].total + this.liabilityCategoryTotals[1].total + this.liabilityCategoryTotals[2].total + 
						this.liabilityCategoryTotals[3].total + this.liabilityCategoryTotals[5].total + this.liabilityCategoryTotals[6].total + 
						this.liabilityCategoryTotals[6].total) > 0 ) {
							this.bytActionStep = "Without touching your savings account, reduce debt";
					} else {
						this.bytActionStep = "Look for investment opportunities";
					}
				}
			}			
		})
	}
}