import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { faCalendarAlt, faPowerOff, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	faCalendarAlt = faCalendarAlt;
	faPowerOff = faPowerOff;
	faAddressBook = faAddressBook;


	constructor(
		private router: Router,
		protected authenticationService: AuthenticationService,
	) {
		// redirect to home if already logged in
		if (this.authenticationService.currentUserValue) {
			this.router.navigate(['/']);
		}

	} ngOnInit(): void {
	}

	logout() {
		if (localStorage.getItem('currentUser') != null)
			this.authenticationService.logout();
	}
}
