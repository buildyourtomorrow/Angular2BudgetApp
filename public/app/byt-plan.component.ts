import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'byt-plan',
    templateUrl: '/app/byt-plan.component.html',
    styleUrls: ['app/byt-plan.component.css']
})
export class BYTPlanComponent implements OnInit {
	totalIncome: number;
	totalBills: number;
	totalExpenses: number;

	rawAssetArray: Object[] = [
		{
	      name:'Someone',
	      description: 'Personal checking account @ Chase',
	      remark: 'This is some text'
	    }
	]

	constructor () {}

	ngOnInit(){};

	addAsset(){
		this.asset
	}

}