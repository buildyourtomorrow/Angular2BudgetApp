import {Component} from '@angular/core';
import {GetBYTUser} from './byt-dashboard-overview.service';

@Component({
    selector: 'byt-net-worth-nav',
    templateUrl: '/app/byt-net-worth-nav.component.html',
    styleUrls: ['app/byt-net-worth-nav.component.css']
})
export class BYTNetWorthNavComponent {
	byt_spinner: boolean;
	byt_spinner_one: boolean;
	byt_spinner_two: boolean;

	constructor(private _getBYTUser: GetBYTUser){}

	addRemoveSpinner(){		
		this.byt_spinner = !this.byt_spinner;
		this._getBYTUser.getUser().subscribe(user => {
			this.byt_spinner = !this.byt_spinner;			
		});
	}
	addRemoveSpinnerOne(){
		this.byt_spinner_one = !this.byt_spinner_one;
		this._getBYTUser.getUser().subscribe(user => {
			this.byt_spinner_one = !this.byt_spinner_one;			
		});
	}
	addRemoveSpinnerTwo(){
		this.byt_spinner_two = !this.byt_spinner_two;
		this._getBYTUser.getUser().subscribe(user => {
			this.byt_spinner_two = !this.byt_spinner_two;		
		});
	}
}