import { Component, OnInit } from '@angular/core';
import { Article } from '../objets/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { AuthenticationService } from '../services/authentication.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

	protected article: Article;
	protected faUser = faUser;
	protected faClock = faClock;
	protected faCalendar = faCalendar;
	protected faEdit = faEdit;

	constructor(private articleService: ArticleService, private route: ActivatedRoute, protected authenticationService: AuthenticationService) {

	}

	getArticle() {
		this.articleService.getArticleById(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data => {
			this.article = data;
		});
	}

	ngOnInit() {
		this.getArticle();
	}

}
