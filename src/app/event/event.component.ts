import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from '../objets/event';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  protected event: Event;
  protected urlVideo = null;
  faMapMarker = faMapMarker;
  faUser = faUser;
  faClock = faClock;
  faCalendar = faCalendar;
  constructor(private eventService: EventService, private route: ActivatedRoute,
      protected sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(){
    this.eventService.getEventById(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data =>
       {
      this.event = data; this.secureUrlVideo(); console.log(data)
    });
  }

  secureUrlVideo(){
      this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.event.linkVideo);
  }

  addVolunteer(volunteering){
	//this.eventService.ajouterVolontaire(volontariat);
  }

}
