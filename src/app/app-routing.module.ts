import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {EvenementComponent} from './evenement/evenement.component';

const routes: Routes = [ {path: '', component: HomeComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'evenement/:id', component: EvenementComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
