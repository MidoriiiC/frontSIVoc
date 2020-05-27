import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../objets/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    private nom = new FormControl('');
    private prenom = new FormControl('');
    private email = new FormControl('');
    private mdp = new FormControl('');

    private authenticationService: AuthenticationService;
    private mode: number;
    protected utilisateur = new Utilisateur();
    protected titre = '';
    
    constructor(private utilisateurService: UtilisateurService,  private route: ActivatedRoute, private router: Router) {
      if (!this.route.snapshot.paramMap.get('id')) {
        this.mode = 0;
        console.log('creation');
        this.titre = 'Création de compte'
        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
      } else {
        this.mode = 1;
        this.getUtilisateur();
        console.log('édition');
      }
     }
  
    creer(){
      let aCreer = new Utilisateur();
      aCreer.nom = this.nom.value;
      aCreer.prenom = this.prenom.value;
      aCreer.email = this.email.value;
      aCreer.mdp = this.mdp.value;
      console.log(this.mdp.value)
      console.log(aCreer.nom + " et " + aCreer.mdp);
      if (this.mode === 0) {
        this.utilisateurService.creerUtilisateur(aCreer).subscribe(data => {
          this.router.navigate(['/'])
        }, err => {
          // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
          console.log("erreur d'enregistrement");
        });
      } else {
        aCreer.id = this.utilisateur.id;
        this.utilisateurService.modifierUtilisateur(aCreer).subscribe(data => {
          this.router.navigate(['/utilisateur/' + data.id])
        }, err => {
          // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
        });
      }
    }
  
    getUtilisateur(){
      this.utilisateurService.getUtilisateurParId(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data =>
      {
        this.utilisateur = data; this.titre = 'Modifier ' + this.utilisateur.nom;
        this.nom.setValue(this.utilisateur.nom);
        this.prenom.setValue(this.utilisateur.prenom);
        this.email.setValue(this.utilisateur.email);
        this.mdp.setValue(this.utilisateur.mdp);
        console.log(data);
      });
    }
  
    ngOnInit() {
    }

}
