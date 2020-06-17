import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Event } from '../objets/event';
import { Volunteering } from '../objets/volunteering';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }

  getEvents (): Observable<any> {
    return this.http.get('http://127.0.0.1:8080/events');
  }
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>('http://127.0.0.1:8080/events/'+id);
  }
  createEvent(event: Event): Observable<Event>{
    return this.http.post<Event>('http://127.0.0.1:8080/events/create', event);
  }
  modifyEvent(event: Event): Observable<Event>{
    return this.http.put<Event>('http://127.0.0.1:8080/events/'+event.id, event);
  }
  addVolunteer(volunteering: Volunteering, eventId: number): Observable<Volunteering>{
	console.log('ici');
	return this.http.post<Volunteering>('http://127.0.0.1:8080/events/'+ eventId +'/addVolunteer', volunteering);
  }
}
