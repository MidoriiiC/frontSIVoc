import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../objets/user';
import { UserService } from '../services/user.service';

interface Authority {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {

  roles: Authority[] = [
    {value: 'utilisateur', viewValue: 'Utilisateur'},
    {value: 'administrateur', viewValue: 'Administrateur'},
    {value: 'modérateur', viewValue: 'Modérateur'},
    {value: 'bénévole', viewValue: 'Bénévole'},
    {value: 'prêtre', viewValue: 'Prêtre'}
  ];

    protected title = new FormControl('');
    protected name = new FormControl('');
    protected firstname = new FormControl('');
    protected email = new FormControl('');
    protected password = new FormControl('');
    protected authority = new FormControl('');

    protected mode: number;
    public account = new User();
    protected titre = '';

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    if (!this.route.snapshot.paramMap.get('id')) {
      this.mode = 0;
      console.log('création');
      this.titre = 'Création d\'un utilisateur'
    } else {
      this.mode = 1;
      this.getAccount();
      console.log('édition');
    }
   }

  create(){
    let toCreate = new User();
    toCreate.name = this.name.value;
    toCreate.firstname = this.firstname.value;
    toCreate.email = this.email.value;
    toCreate.password = this.password.value;
    toCreate.authority = this.authority.value;
    console.log(toCreate);
    if (this.mode === 0) {
      this.userService.createUserRole(toCreate).subscribe(data => {
        this.router.navigate(['/users'])
      }, err => {
        // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
      });
    } else {
      toCreate.id = this.account.id;
      this.userService.modifyUser(toCreate).subscribe(data => {
        this.router.navigate(['/users'])
      }, err => {
        // TODO une fois que les erreurs seront gérées dans le back (prochaine phase)
      });
    }
  }



  getAccount(){
    this.userService.getUserById(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data =>
    {
      this.account = data;
      console.log(data);
      this.titre = 'Modifier ' + this.account.firstname+' '+ this.account.name;
      this.firstname.setValue(this.account.firstname);
      this.name.setValue(this.account.name);
      this.email.setValue(this.account.email);
      this.password.setValue(this.account.password);
      this.authority.setValue(this.account.authority);
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
