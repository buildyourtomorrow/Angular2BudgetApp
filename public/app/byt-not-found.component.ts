import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth.service';

@Component({
	// the following three lines are just here to avoid errors
	selector: 'byt-net-worth',
	templateUrl: '/app/byt-net-worth.component.html',
	styleUrls: ['app/byt-net-worth.component.css']
})
export class BYT404Component implements OnInit {
	constructor(private auth: Auth, private router: Router) {}

	ngOnInit(){
		console.log('here we are again my friend');
		this.auth.logout();
		this.router.navigate(['/login']);
	}

}