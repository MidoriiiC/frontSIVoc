import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';
import { stringify } from 'querystring';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log("interceptor");
        let currentUser = this.authenticationService.currentUserValue;
        //if (currentUser && currentUser.token) {
        if (currentUser && currentUser.name && currentUser.password){
          console.log("test pour changer l'entête")
          request = request.clone({
                setHeaders: {
                  user : currentUser.name,
                  password : currentUser.password,
                  //Authorization: `Bearer ${currentUser.token}`
                  //Authorization: `Basic ${currentUser.name}:${currentUser.password}`
                }
            });
        }

        return next.handle(request);
    }
}
