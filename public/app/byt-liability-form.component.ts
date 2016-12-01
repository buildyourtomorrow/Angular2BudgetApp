import {Component, OnInit, EventEmitter } from '@angular/core';

import {GetBYTUser} from './byt-dashboard-overview.service';
import {BYTLiabilityFormModel} from './byt-liability-form-model.component';
import {BYTPostLiability} from "./byt-dashboard-overview.service";

@Component({
	selector: 'byt-liability-form',
	templateUrl: '/app/byt-liability-form.component.html',
	styleUrls: ['app/byt-liability-form.component.css'],
	outputs: ['liabilityForm']
})
export class BYTLiabilityFormComponent {

	constructor(private _bytPostLiability: BYTPostLiability){}

	liabilityForm = new EventEmitter<Object>();
	submitted: boolean = false;
	model = new BYTLiabilityFormModel(1, '', new Date, '', '');
	categories: Object[] = [
		{ name: "Credit card debt" },
		{ name: "Medical debt" },
		{ name: "Unpaid rent" },
		{ name: "Unpaid utilities" },
		{ name: "Auto loan" },
		{ name: "Personal loan" },
		{ name: "Consolidation loan" },
		{ name: "Student loan" },
		{ name: "Home loan" },
		{ name: "Business loan" },
		{ name: "Other" }
	];

	submitLiability(){
		this.submitted = true;
	}

	submitLiabilityFinal(){
		this.submitted = false;
		this.liabilityForm.emit(this.model);
		this._bytPostLiability.bytPostLiabilityForm(this.model).subscribe(user => {})
		this.model = new BYTLiabilityFormModel(1, '', new Date, '', '');
	}

}