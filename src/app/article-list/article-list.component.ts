import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../objets/article';
import { AuthenticationService } from '../services/authentication.service';

@Component({
	selector: 'app-article-list',
	templateUrl: './article-list.component.html',
	styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

	protected articles: Array<Article>;

	constructor(private articleService: ArticleService, protected authenticationService: AuthenticationService) { }

	ngOnInit() {
		this.getArticles();
	}

	getArticles() {
		this.articleService.getArticles().subscribe(data => {
			this.articles = data;
		});
	}

}
