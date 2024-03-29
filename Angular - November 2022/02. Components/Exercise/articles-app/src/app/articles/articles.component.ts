import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleData } from '../data/data';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
    articles: Article[] | undefined;

    constructor() { }

    ngOnInit() {
        this.articles = new ArticleData().getData();
    }
}
