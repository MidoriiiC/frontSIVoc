import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../objets/utilisateur';
import { AuthenticationService } from '../services/authentication.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({ templateUrl: 'infoCompte.component.html' })

export class InfoCompteComponent implements OnInit {
  currentUser: Utilisateur;
  users = [];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private utilisateurService: UtilisateurService
) {
    this.currentUser = this.authenticationService.currentUserValue;
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
}ngOnInit() {
  if(this.currentUser.role==="ROLE_MODERATEUR")
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.utilisateurService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.utilisateurService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}