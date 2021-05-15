import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '@pages/home/services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ArticleCardComponent {
  @Input() article = <Article>{};
  @Input() isListElement = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  open(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
