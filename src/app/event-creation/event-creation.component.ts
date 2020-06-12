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
      console.log('creation');
      this.titre = 'Création d\'évènement'
    } else {
      this.mode = 1;
      this.getEvent();
      console.log('edition');
    }
   }

  creer(){
    let aCreer = new Event();
    aCreer.name = this.name.value;
    aCreer.contentArticle = this.contentArticle.value;
    aCreer.image = this.image.value;
    aCreer.linkVideo = this.linkVideo.value;
    aCreer.date = this.date.value;
    aCreer.hour = this.hour.value;
    aCreer.organizer = this.organizer.value;
    aCreer.place = this.place.value;
    if (this.mode === 0) {
      this.eventService.createEvent(aCreer).subscribe(data => {
        this.router.navigate(['/event/' + data.id])
      }, err => {
        // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
      });
    } else {
      aCreer.id = this.event.id;
      this.eventService.modifyEvent(aCreer).subscribe(data => {
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
