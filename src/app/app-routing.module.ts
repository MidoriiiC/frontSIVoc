import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EvenementComponent } from './evenement/evenement.component';
import { EvenementCreationComponent } from './evenement-creation/evenement-creation.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';

const routes: Routes = [ {path: '', component: HomeComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'evenement/:id', component: EvenementComponent},
 {path: 'creation/evenement', component: EvenementCreationComponent},
 {path: 'modification/evenement/:id', component: EvenementCreationComponent},
 {path: 'article/:id', component: ArticleComponent},
 {path: 'creation/article', component: ArticleCreationComponent},
 {path: 'modification/article/:id', component: ArticleCreationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
