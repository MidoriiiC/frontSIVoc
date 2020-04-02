import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private utilisateur = new FormControl('');
  public motDePasse = new FormControl('');
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  seConnecter() {
    console.log('Utilisateur: ' + this.utilisateur.value + '\nMot de passe: ' + this.motDePasse.value);
    let user = { utilisateur: this.utilisateur.value, motDepasse: this.motDePasse.value }
    this.httpClient.post("/api/register", user).subscribe(res => {
      console.log('Succeeded');
      this.profile = res;
    }, err => {
      console.log('Error', err);
    });
  }

}
