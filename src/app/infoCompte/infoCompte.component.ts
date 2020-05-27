import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../objets/evenement';
import { EvenementService } from '../services/evenement.service';
import { Utilisateur } from '../objets/utilisateur';

@Component({
  selector: 'app-evenement-creation',
  templateUrl: './evenement-creation.component.html',
  styleUrls: ['./evenement-creation.component.scss']
})
export class EvenementCreationComponent implements OnInit {
    private nom = new FormControl('');
    private lieu = new FormControl('');
    private organisateur = new FormControl('');

    private mode: number;
    protected evenement = new Evenement();
    protected titre = '';

  constructor(private evenementService: EvenementService, private route: ActivatedRoute, private router: Router) {
    
}

  

  ngOnInit() {
    if(localStorage.getItem('currentUser')!=null){
        let utilisateur = JSON.parse(localStorage.getItem('currentUser'));
        console.log(utilisateur.nom);
        this.mode = 0
    }
    else{
        console.log("non connecté")
        this.mode = 1;
    }
  }

}
