import { User } from '../objets/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { faPlus, faTimes, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

import { Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})

export class UsersListComponent implements OnInit {
  currentUser: User;
  users : User[];
  protected user: User;
  faPlus = faPlus;
  faTimes = faTimes;
  faPaintBrush = faPaintBrush;

  protected firstnameUser = new FormControl('');
  protected usernameUser = new FormControl('');
  protected emailUser = new FormControl('');
  protected authorityUser = new FormControl('');
  protected displayedColumns = ['firstname', 'username', 'email', 'authority','modify','delete'];

  sortedData: User[];

  constructor(
    protected authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService
) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    this.loadAllUsers();
    this.sortedData = this.users.slice();
  }

  deleteUser(user: User) {
    console.log("id du user: " +user.id)
    this.userService.delete(user.id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }
  createUser(){

  }
  modifyUser(user: User) {
    console.log("essai pour modifier "+ user.id);
    //this.userService.modifierUser(id) //veut un user
      //.pipe(first())
      //.subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    return this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'firstname': return compare(a.firstname, b.firstname, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'authority': return compare(a.authority, b.authority, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
