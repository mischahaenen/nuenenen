import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Tag } from 'app/shared/models/tag';
import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss'],
})
export class ArticleFilterComponent {
  searchKeyWords: string[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  selectedTag = <Tag>{};
  tags: Tag[] = [
    { name: 'Bieberstufe', active: false },
    { name: 'Wolfsstufe', active: false },
    { name: 'Pfadistufe', active: false },
    { name: 'Piostufe', active: false },
    { name: 'Roverstufe', active: false },
    { name: 'Abteilung', active: false },
  ];

  constructor(private articleService: ArticleService) {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.searchKeyWords.push(value);
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    console.log(value);
  }

  remove(key: string): void {
    const index = this.searchKeyWords.indexOf(key);

    if (index >= 0) {
      this.searchKeyWords.splice(index, 1);
    }
    console.log(key);
  }

  /* filterText(text: string): void {
    this.articleService
      .getArticles()
      .pipe(
        map((articles: Article[]) => {
          return text
            ? articles.filter(
                (article) => article.title.includes(text) || article.description.includes(text)
              )
            : articles;
        })
      )
      .subscribe((articles) => {
        this.articleService.articlesChanged.emit(articles);
      });
  }

  filter(value: string): void {
    this.articleService
      .getArticles()
      .pipe(
        map((articles) => {
          let filteredArticles = articles;
          const tag = this.tags.find((t) => t.name === value);

          // change the active state of the existing tag and stors selectedtag
          if (tag) {
            this.selectedTag = tag;
            this.changeTagState(this.selectedTag);
          }
          // if tag exists and it's not jet triggered
          if (this.selectedTag && this.selectedTag.active) {
            filteredArticles = filteredArticles.filter((a) => a.tag === this.selectedTag.name);
          }
          // if value is no tag, look for text to filter, coming from input
          if (!tag || this.textFormValue) {
            this.textFormValue = !tag ? value : this.textFormValue;
            filteredArticles = filteredArticles.filter(
              (a) =>
                a.title.toLocaleLowerCase().includes(this.textFormValue.toLocaleLowerCase()) ||
                a.description.toLocaleLowerCase().includes(this.textFormValue.toLocaleLowerCase())
            );
          }
          return filteredArticles;
        })
      )
      .subscribe((articles) => {
        this.articleService.articlesChanged.emit(articles);
      });
    //
  } */

  changeTagState(tag: Tag) {
    tag.active = !tag.active;
    this.tags.forEach((t) => (t.name === tag.name ? (t.active = tag.active) : (t.active = false)));
  }
}
