import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../objets/article';
import { ArticleService } from '../services/article.service';

@Component({
	selector: 'app-article-creation',
	templateUrl: './article-creation.component.html',
	styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {

	protected title = new FormControl('');
	protected content = new FormControl('');
	protected date = new FormControl('');
	protected hour = new FormControl('');
	protected author = new FormControl('');
	protected illustration = new FormControl('');
	protected mode: number;
	protected article = new Article();
	protected pageTitle = '';

	constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {
		if (!this.route.snapshot.paramMap.get('id')) {
			this.mode = 0;
			this.pageTitle = 'Création d\'un article'
		} else {
			this.mode = 1;
			this.getArticle();
		}
	}

	create() {
		let toCreate = new Article();
		toCreate.title = this.title.value;
		toCreate.content = this.content.value;
		toCreate.date = this.date.value;
		toCreate.hour = this.hour.value;
		toCreate.author = this.author.value;
		toCreate.illustration = this.illustration.value;
		if (this.mode === 0) {
			this.articleService.createArticle(toCreate).subscribe(data => {
				this.router.navigate(['/article/' + data.id])
			});
		} else {
			toCreate.id = this.article.id;
			this.articleService.modifyArticle(toCreate).subscribe(data => {
				this.router.navigate(['/article/' + data.id])
			});
		}
	}

	getArticle() {
		this.articleService.getArticleById(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data => {
			this.article = data; this.pageTitle = 'Modifier ' + this.article.title;
			this.title.setValue(this.article.title);
			this.date.setValue(this.article.date);
			this.hour.setValue(this.article.hour);
			this.author.setValue(this.article.author);
			this.content.setValue(this.article.content);
			this.illustration.setValue(this.article.illustration);
		});
	}

	ngOnInit() {

	}
}
