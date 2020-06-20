import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../objets/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-info-account',
  templateUrl: './infoAccount.component.html',
  styleUrls: ['./infoAccount.component.scss']
})

export class InfoAccountComponent implements OnInit {
  currentUser: User;

  constructor(
    protected authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService
) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
}ngOnInit() {
  }

  deleteUser(id: number) {
    //this.userService.delete(id)
    //  .pipe(first())
    //  .subscribe(() => this.loadAllUsers());
  }

  modifyUser(id: number) {

    //this.userService.modifierUser(id) //veut un user
      //.pipe(first())
      //.subscribe(() => this.loadAllUsers());
  }
}
