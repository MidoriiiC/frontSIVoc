import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../services/evenement.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Evenement } from '../objets/evenement';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})

export class EvenementComponent implements OnInit {
  protected evenement: Evenement;
  protected urlVideo = null;
  faMapMarker = faMapMarker;
  faUser = faUser;
  faClock = faClock;
  faCalendar = faCalendar;
  constructor(private evenementService: EvenementService, private route: ActivatedRoute,
      protected sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getEvenement();
  }

  getEvenement(){
    this.evenementService.getEvenementParId(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data =>
       {
      this.evenement = data; this.securiserUrlVideo(); console.log(data)
    });
  }

  securiserUrlVideo(){
      this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.evenement.lienVideo);
  }

  ajouterVolontaire(volontariat){
	//this.evenementService.ajouterVolontaire(volontariat);
  }

}
