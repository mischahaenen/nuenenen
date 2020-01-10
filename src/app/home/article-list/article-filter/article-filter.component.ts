import { Component, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ArticleService } from '@home/article-list/shared/article.service';
import { Article } from '../shared/article';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss']
})
export class ArticleFilterComponent {
  tags: { name: string; active: boolean }[] = [
    { name: 'Bieberstufe', active: false },
    { name: 'Wolfsstufe', active: true },
    { name: 'Pfadistufe', active: false },
    { name: 'Piostufe', active: false },
    { name: 'Roverstufe', active: false },
    { name: 'Abteilung', active: false }
  ];
  @Input() articles: Article[];

  constructor(private articleService: ArticleService) {}

  filterTag(tag: { name: string; active: boolean }): void {
    if (tag.active) {
      const articles = this.articles.filter(article => article.tag === tag.name);
      this.articleService.articlesChanged.emit(articles);
    } else {
      this.articleService.getArticles().subscribe(articles => this.articleService.articlesChanged.emit(articles));
    }
  }

  filterText(): void {
    /* const articles = this.articles.filter((article: Article) => article.title === text || article.description === text);
    this.articleService.articlesChanged.emit(articles); */
  }
}
