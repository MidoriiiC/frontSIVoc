import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Utilisateur } from '../objets/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;
  constructor(
    private utilisateurService: UtilisateurService,
    protected authenticationService: AuthenticationService,
    private router: Router
  ){  }

  ngOnInit() {
  }

  admin(){
    console.log("admin a créer");
    let u = new Utilisateur;
    u.nom="admin";
    u.prenom="prenom";
    u.email="email@admin.fr";
    u.mdp="mdp";
    this.utilisateurService.creerUtilisateurRole(u).subscribe(data =>{
      this.router.navigate(['/']);
    })
  }
  moder(){
    console.log("modo a créer");
    let u = new Utilisateur;
    u.nom="modo";
    u.prenom="prenom";
    u.email="email@modo.fr";
    u.mdp="mdp";
    this.utilisateurService.creerUtilisateurRole(u).subscribe(data =>{
      this.router.navigate(['/']);
    })
  }
}
