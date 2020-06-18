import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EventComponent } from './event/event.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { AuthGuard} from './config/auth.guard';
import { InfoCompteComponent } from './infoCompte/infoCompte.component';
import { UsersListComponent } from './usersList/usersList.component';

const routes: Routes = [ {path: '', component: HomeComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'event/:id', component: EventComponent},
 {path: 'creation/event', component: EventCreationComponent, canActivate: [AuthGuard]},
 {path: 'modification/event/:id', component: EventCreationComponent, canActivate: [AuthGuard]},
 {path: 'article/:id', component: ArticleComponent},
 {path: 'infoCompte', component: InfoCompteComponent, canActivate: [AuthGuard]},
 {path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
 {path: 'creation/article', component: ArticleCreationComponent, canActivate: [AuthGuard]},
 {path: 'modification/article/:id', component: ArticleCreationComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
