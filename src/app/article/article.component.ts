import { Component, OnInit } from '@angular/core';
import { Article } from '../objets/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
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
  faUser = faUser;
  faClock = faClock;
  faCalendar = faCalendar;
  faEdit = faEdit;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { 
	
  }

  getArticle(){
	this.articleService.getArticleById(Number.parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(data =>
       {
      this.article = data;
    });
  }

  ngOnInit() {
	this.getArticle();
  }

}
