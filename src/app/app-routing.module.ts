import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EventComponent } from './event/event.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { AuthGuard} from './config/auth.guard';
import { InfoAccountComponent } from './infoAccount/infoAccount.component';
import { UsersListComponent } from './usersList/usersList.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [ {path: '', component: HomeComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'events', component: EventListComponent},
 {path: 'event/:id', component: EventComponent},
 {path: 'creation/event', component: EventCreationComponent, canActivate: [AuthGuard]},
 {path: 'modification/event/:id', component: EventCreationComponent, canActivate: [AuthGuard]},
 {path: 'articles', component: ArticleListComponent},
 {path: 'article/:id', component: ArticleComponent},
 {path: 'infoAccount', component: InfoAccountComponent, canActivate: [AuthGuard]},
 {path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
 {path: 'creation/article', component: ArticleCreationComponent, canActivate: [AuthGuard]},
 {path: 'modification/article/:id', component: ArticleCreationComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
