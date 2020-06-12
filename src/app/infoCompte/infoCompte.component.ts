import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../objets/event';
import { EventService } from '../services/event.service';
>>>>>>> 7f1e97250b934c5214a475a22f9cea43878c8b3b
import { Utilisateur } from '../objets/utilisateur';
import { AuthenticationService } from '../services/authentication.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

<<<<<<< HEAD
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
=======
@Component({
  selector: 'app-info-compte',
  templateUrl: './infoCompte.component.html',
  styleUrls: ['./infoCompte.component.scss']
})
export class EventCreationComponent implements OnInit {
    private nom = new FormControl('');
    private lieu = new FormControl('');
    private organisateur = new FormControl('');

    private mode: number;
    protected event = new Event();
    protected titre = '';

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {
    
}

  
>>>>>>> 7f1e97250b934c5214a475a22f9cea43878c8b3b

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