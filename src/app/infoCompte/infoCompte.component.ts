import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../objets/event';
import { EventService } from '../services/event.service';
import { Utilisateur } from '../objets/utilisateur';
import { AuthenticationService } from '../services/authentication.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-info-compte',
  templateUrl: './infoCompte.component.html',
  styleUrls: ['./infoCompte.component.scss']
})

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

    private nom = new FormControl('');
    private lieu = new FormControl('');
    private organisateur = new FormControl('');

    private mode: number;
    protected event = new Event();
    protected titre = '';
  
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