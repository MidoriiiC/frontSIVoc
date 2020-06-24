import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '../objets/article';

@Injectable({
	providedIn: 'root'
})
export class ArticleService {

	constructor(private http: HttpClient) { }

	getArticleById(id: number): Observable<Article> {
		return this.http.get<Article>('http://127.0.0.1:8080/articles/' + id);
	}
	createArticle(article: Article): Observable<Article> {
		return this.http.post<Article>('http://127.0.0.1:8080/articles/create', article);
	}
	modifyArticle(article: Article): Observable<Article> {
		return this.http.put<Article>('http://127.0.0.1:8080/articles/' + article.id, article);
	}
	getArticles(): Observable<any> {
		return this.http.get('http://127.0.0.1:8080/articles');
	}
	getLastsArticles(): Observable<any> {
		return this.http.get('http://127.0.0.1:8080/articles/lasts');
	}
}
