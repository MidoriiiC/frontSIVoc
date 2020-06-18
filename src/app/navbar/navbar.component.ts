import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { faCalendarAlt, faEnvelope, faPowerOff, faGraduationCap, faTools,
		 faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    
  faCalendarAlt = faCalendarAlt;
  faEnvelope = faEnvelope;
  faPowerOff = faPowerOff;
  faGraduationCap = faGraduationCap;
  faTools = faTools;
  faAddressBook = faAddressBook;  


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    protected authenticationService: AuthenticationService,
    private alertService: AlertService
) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }

}ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  logout(){
    if(localStorage.getItem('currentUser')!=null)
      console.log("déco enclenchée")
    this.authenticationService.logout();
  }
}
