import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EvenementComponent } from './evenement/evenement.component';
import { EvenementCreationComponent } from './evenement-creation/evenement-creation.component';

const routes: Routes = [ {path: '', component: HomeComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'evenement/:id', component: EvenementComponent},
 {path: 'creation/evenement', component: EvenementCreationComponent},
 {path: 'modification/evenement/:id', component: EvenementCreationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
