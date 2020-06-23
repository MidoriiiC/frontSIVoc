import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../objets/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss']
})
export class EventCreationComponent implements OnInit {


    protected name = new FormControl('');
    protected contentArticle = new FormControl('');
    protected image = new FormControl('');
    protected linkVideo = new FormControl('');
    protected date = new FormControl('');
    protected hour = new FormControl('');
    protected place = new FormControl('');
    protected organizer = new FormControl('');

    protected mode: number;
    protected event = new Event();
    protected titre = '';

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {
    if (!this.route.snapshot.paramMap.get('id')) {
      this.mode = 0;
      this.titre = 'Création d\'évènement'
    } else {
      this.mode = 1;
      this.getEvent();
    }
   }
  
  formatYoutubeLink(videoLink: string){
	console.log('dans le reformatage '+videoLink);
	if(!videoLink) return null;
	else if(videoLink.indexOf('.be/')!=-1) return 'https://www.youtube.com/embed/'+videoLink.substring(videoLink.indexOf('.be/')+4, videoLink.length)
	else if(videoLink.indexOf('?v=')!=-1) return 'https://www.youtube.com/embed/'+videoLink.substring(videoLink.indexOf('?v=')+3, videoLink.length);
	else if(videoLink.indexOf('.com/embed/')!=-1)return videoLink;
	return null;
  }

  create(){
    let toCreate = new Event();
    toCreate.name = this.name.value;
    toCreate.contentArticle = this.contentArticle.value;
    toCreate.image = this.image.value;
    toCreate.linkVideo = this.formatYoutubeLink(this.linkVideo.value);
    toCreate.date = this.date.value;
    toCreate.hour = this.hour.value;
    toCreate.organizer = this.organizer.value;
    toCreate.place = this.place.value;
    if (this.mode === 0) {
      this.eventService.createEvent(toCreate).subscribe(data => {
        this.router.navigate(['/event/' + data.id])
      }, err => {
        // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
      });
    } else {
      toCreate.id = this.event.id;
      this.eventService.modifyEvent(toCreate).subscribe(data => {
        this.router.navigate(['/event/' + data.id])
      }, err => {
        // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
      });
    }
  }



  getEvent(){
    this.eventService.getEventById(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data =>
    {
      this.event = data; this.titre = 'Modifier ' + this.event.name;
      this.name.setValue(this.event.name);
      this.date.setValue(this.event.date);
      this.hour.setValue(this.event.hour);
      this.organizer.setValue(this.event.organizer);
      this.image.setValue(this.event.image);
      this.contentArticle.setValue(this.event.contentArticle);
      this.linkVideo.setValue(this.event.linkVideo);
      this.place.setValue(this.event.place);
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
