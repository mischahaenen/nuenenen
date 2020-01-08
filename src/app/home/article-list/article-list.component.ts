import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ArticleService } from '@app/home/article-list/shared/article.service';
import { Article } from './shared/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;
  filters: string[] = ['Wolfsstufe', 'Pfadistufe', 'Piostufe', 'Roverstufe', 'Abteilung'];

  constructor(private articleSrvice: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articles$ = this.articleSrvice.getArticles();
  }

  openNewArticlePage(): void {
    this.router.navigate(['/new-article']);
  }
}
