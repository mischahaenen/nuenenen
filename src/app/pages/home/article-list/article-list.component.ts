import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { Article } from './shared/article';
import { ArticleService } from './shared/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles$ = new Observable<Article[]>();
  isFilterActive = false;
  isListView = false;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
    this.articleService.articlesChanged.subscribe((articles: Article[]) => {
      this.articles$ = of(articles);
    });
  }

  openNewArticlePage(): void {
    this.router.navigate(['/new-article']);
  }

  toggleViewMode(mode: string) {
    this.isListView = mode === 'grid' ? false : true;
  }

  toggleFilter() {
    this.isFilterActive = !this.isFilterActive;
  }
}
