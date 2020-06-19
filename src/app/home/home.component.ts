import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { User } from '../objets/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;
  constructor(
    private userService: UserService,
    protected authenticationService: AuthenticationService,
    private router: Router
  ){  }

  ngOnInit() {
  }

  admin(){
    console.log("admin a créer");
    let user = new User;
    user.name="admin";
    user.firstname="prenom";
    user.email="email@admin.fr";
    user.password="mdp";
    this.userService.createUserRole(user).subscribe(data =>{
      this.router.navigate(['/']);
    })
  }
  moder(){
    console.log("modo a créer");
    let user = new User;
    user.name="modo";
    user.firstname="prenom";
    user.email="email@modo.fr";
    user.password="mdp";
    this.userService.createUserRole(user).subscribe(data =>{
      this.router.navigate(['/']);
    })
  }
}
