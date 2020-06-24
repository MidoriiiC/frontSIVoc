import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  
  protected events: Array<Event>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
	this.getEvents();
  }

  getEvents(){
    this.eventService.getEvents().subscribe(data =>
    {
      this.events = data; console.log(data)
    });
  }

}
