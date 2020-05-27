import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Utilisateur } from '../objets/utilisateur';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Utilisateur>;
    public currentUser: Observable<Utilisateur>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Utilisateur {
        return this.currentUserSubject.value;
    }

    login(nom, mdp) {
        console.log('username: ' + nom +" et mdp: "+ mdp);
        return this.http.post<any>(`http://127.0.0.1:8080/connexion`, {nom, mdp})
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}