import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
	selector: 'app-event-list',
	templateUrl: './event-list.component.html',
	styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

	protected events: Array<Event>;

	constructor(private eventService: EventService, protected authenticationService: AuthenticationService) { }

	ngOnInit() {
		this.getEvents();
	}

	getEvents() {
		this.eventService.getEvents().subscribe(data => {
			this.events = data;
		});
	}

}
