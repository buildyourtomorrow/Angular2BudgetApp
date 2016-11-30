import {Component, OnInit, EventEmitter } from '@angular/core';

import {GetBYTUser} from './byt-dashboard-overview.service';
import {BYTAssetFormModel} from './byt-asset-form-model.component';
import {BYTPostAsset} from "./byt-dashboard-overview.service";

@Component({
	selector: 'byt-asset-form',
	templateUrl: '/app/byt-asset-form.component.html',
	styleUrls: ['app/byt-asset-form.component.css'],
	outputs: ['assetForm']
})
export class BYTAssetFormComponent {

	constructor(private _bytPostAsset: BYTPostAsset){}

	assetForm = new EventEmitter<Object>();
	submitted: boolean = false;
	model = new BYTAssetFormModel(1, '', new Date, '', '');
	categories: Object[] = [
		{ name: "Cash - checking accounts" },
		{ name: "Cash - savings accounts" },
		{ name: "Special deposit accounts" },
		{ name: "Market investments" },
		{ name: "Certificate of deposit" },
		{ name: "Life insurance (cash value)" },
		{ name: "Mutual funds" },
		{ name: "Car" },
		{ name: "Equity in private company" },
		{ name: "Other" }
	];

	submitAsset(){
		this.submitted = true;
	}

	submitAssetFinal(){
		this.submitted = false;
		this.assetForm.emit(this.model);
		this._bytPostAsset.bytPostAssetForm(this.model).subscribe(user => {})
		this.model = new BYTAssetFormModel(1, '', new Date, '', '');
	}

}