import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCardComponent {
  @Input() article = <Article>{};
  @Input() isListElement = true;
}
