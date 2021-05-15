import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@pages/home/models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article = {} as Article;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.article = this.route.snapshot.data.article;
  }
}
