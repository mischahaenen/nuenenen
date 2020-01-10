import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { ArticleService } from '@home/article-list/shared/article.service';
import { Article } from '../shared/article';
import { Tag } from '@app/shared/models/tag';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss']
})
export class ArticleFilterComponent {
  private textFormValue: string;
  private selectedTag: Tag;
  public searchForm: FormGroup;

  constructor(public articleService: ArticleService) {
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.get('text').valueChanges.subscribe(value => this.filter(value));
  }

  filter(value: string): void {
    this.articleService
      .getArticles()
      .pipe(
        map(articles => {
          let filteredArticles = articles;
          const tag = this.articleService.tags.find(t => t.name === value);

          // change the active state of the existing tag and stors selectedtag
          if (tag) {
            this.selectedTag = tag;
            this.changeTagState(this.selectedTag);
          }
          // if tag exists and it's not jet triggered
          if (this.selectedTag && this.selectedTag.active) {
            filteredArticles = filteredArticles.filter(a => a.tag === this.selectedTag.name);
          }
          // if value is no tag, look for text to filter, coming from input
          if (!tag || this.textFormValue) {
            this.textFormValue = !tag ? value : this.textFormValue;
            filteredArticles = filteredArticles.filter(
              a =>
                a.title.toLocaleLowerCase().includes(this.textFormValue.toLocaleLowerCase()) ||
                a.description.toLocaleLowerCase().includes(this.textFormValue.toLocaleLowerCase())
            );
          }
          return filteredArticles;
        })
      )
      .subscribe(articles => {
        this.articleService.articlesChanged.emit(articles);
      });
    //
  }

  changeTagState(tag: Tag) {
    tag.active = !tag.active;
    this.articleService.tags.map(t => (t.name === tag.name ? (t.active = tag.active) : (t.active = false)));
  }
}