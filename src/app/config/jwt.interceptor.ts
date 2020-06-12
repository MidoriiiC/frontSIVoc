import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        console.log("test pour changer l'entête")
        if (currentUser && currentUser.token) {
        //if (currentUser && currentUser.nom && currentUser.mdp){
            console.log("change l'entête de la requête avec le token")
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                    //Authorization: `Basic ${currentUser.nom,currentUser.mdp}`
                }
            });
        }

        return next.handle(request);
    }
}