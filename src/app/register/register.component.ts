import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../objets/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string;
	titre = 'Inscription';
	protected user = new User();

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private authenticationService: AuthenticationService,
		private router: Router
	) {
		// redirect to home if already logged in
		if (this.authenticationService.currentUserValue) {
			this.router.navigate(['/']);
		}
	}
	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			name: ['', Validators.required],
			firstname: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f() { return this.registerForm.controls; }

	createAccount() {
		let userCreation = new User();
		userCreation.name = this.f.name.value;
		userCreation.firstname = this.f.firstname.value;
		userCreation.email = this.f.email.value;
		userCreation.password = this.f.password.value;
		this.userService.createUser(userCreation)
			.subscribe(() => {
				this.router.navigate(['/'])
			});
	}
}
