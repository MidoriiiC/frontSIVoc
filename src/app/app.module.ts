import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { EvenementService } from './services/evenement.service';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EvenementCreationComponent } from './evenement-creation/evenement-creation.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    EvenementComponent,
    EvenementCreationComponent,
    FooterComponent,
    ArticleComponent,
    ArticleCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FontAwesomeModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [EvenementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
