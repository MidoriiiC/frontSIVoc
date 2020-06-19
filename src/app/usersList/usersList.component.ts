import { Component, OnInit } from '@angular/core';
import { User } from '../objets/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-compte',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})

export class UsersListComponent implements OnInit {
  currentUser: User;
  user : User;
  users : Array <User> = [];
  faPlus = faPlus;

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
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }
  createUser(){

  }
  modifyUser(id: number) {

    //this.userService.modifierUser(id) //veut un user
      //.pipe(first())
      //.subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}
