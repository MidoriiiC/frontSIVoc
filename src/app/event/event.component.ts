import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from '../objets/event';
import { Volunteering } from '../objets/volunteering';
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
  protected labelVolunteering = new FormControl('');
  protected descriptionVolunteering = new FormControl('');
  protected schelduleVolunteering = new FormControl('');

  constructor(private eventService: EventService, private authenticationService: AuthenticationService, private route: ActivatedRoute,
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

  addVolunteer(volunteering: Volunteering){
	volunteering.volunteer = this.authenticationService.currentUserValue;
	console.log('le bouton est bien enclenche');
	this.eventService.modifyVolunteering(volunteering, this.event.id).subscribe(data => {
		console.log(data);
	}, err => {console.log(err)});
  }

  createVolunteering(){
	let volunteering = new Volunteering();
	volunteering.label = this.labelVolunteering.value;
	volunteering.description = this.descriptionVolunteering.value;
	volunteering.scheldule = this.schelduleVolunteering.value;
	this.eventService.addVolunteering(volunteering, this.event.id).subscribe(data => {
		this.event.volunteerings.push(volunteering);
	});
  }

}
