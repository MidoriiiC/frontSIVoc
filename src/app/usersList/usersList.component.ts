import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../objets/utilisateur';
import { AuthenticationService } from '../services/authentication.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-compte',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})

export class UsersListComponent implements OnInit {
  currentUser: Utilisateur;
  user : Utilisateur;
  users : Array <Utilisateur> = [];
  faPlus = faPlus;

  constructor(
    protected authenticationService: AuthenticationService,
    private router: Router,
    private utilisateurService: UtilisateurService
) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
}ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.utilisateurService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }
  createUser(){

  }
  modifyUser(id: number) {

    //this.utilisateurService.modifierUtilisateur(id) //veut un user
      //.pipe(first())
      //.subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.utilisateurService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}
