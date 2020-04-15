import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Evenement } from '../objets/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  constructor(private http: HttpClient) { }

  getEvenements (): Observable<any> {
    return this.http.get('http://127.0.0.1:8080/evenements');
  }
  getEvenementParId(id: number): Observable<Evenement> {
    return this.http.get<Evenement>('http://127.0.0.1:8080/evenements/'+id);
  }
}
