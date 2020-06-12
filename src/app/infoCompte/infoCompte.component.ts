import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../objets/event';
import { EventService } from '../services/event.service';
import { Utilisateur } from '../objets/utilisateur';

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
