import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { User } from '../objets/user';
import { Event } from '../objets/event'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { EventService } from '../services/event.service';
import { ArticleService } from '../services/article.service';
import { Article } from '../objets/article';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	faPlus = faPlus;
	protected articles : Array<Article>;
	protected events : Array<Event>;

	constructor(
		protected authenticationService: AuthenticationService, private articleService: ArticleService, private eventService: EventService
	) { }

	ngOnInit() {
		this.getLastsArticles();
		this.getLastsEvents();
	}

	getLastsEvents() {
		this.eventService.getLastsEvents().subscribe(data => {
			this.events = data; console.log(data)
		});
	}
		getLastsArticles() {
		this.articleService.getLastsArticles().subscribe(data => {
			this.articles = data; console.log(data)
		});
	}
}
