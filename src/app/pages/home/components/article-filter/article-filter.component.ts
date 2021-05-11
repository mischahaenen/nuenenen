import { Component } from '@angular/core';
import { Tag } from '@pages/home/models/tag';
import { MatChipInputEvent } from '@angular/material/chips';
import { map } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss'],
})
export class ArticleFilterComponent {
  searchKeyWords: string[] = [];
  tags: Tag[] = [
    { name: 'Bieberstufe', active: false },
    { name: 'Wolfsstufe', active: false },
    { name: 'Pfadistufe', active: false },
    { name: 'Piostufe', active: false },
    { name: 'Roverstufe', active: false },
    { name: 'Abteilung', active: false },
  ];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

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
    this.filter();
  }

  remove(key: string): void {
    const index = this.searchKeyWords.indexOf(key);
    if (index >= 0) {
      this.searchKeyWords.splice(index, 1);
    }
    this.filter();
  }

  selectTag(tag: Tag) {
    this.tags.forEach((t) => (t.name === tag.name ? (t.active = !tag.active) : (t.active = false)));
    this.filter();
  }

  filter(): void {
    this.articleService
      .getArticles()
      .pipe(
        map((articles) => {
          let filteredArticles = articles;
          // Filters by tag
          const tag = this.tags.find((t) => !!t.active);
          if (tag) filteredArticles = articles.filter((a) => a.tag === tag.name);
          // Filters by searchKeyWords
          if (this.searchKeyWords.length) {
            filteredArticles = filteredArticles.filter((article) =>
              this.searchKeyWords.every(
                (key) =>
                  article.title.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
                  article.description.toLocaleLowerCase().includes(key.toLocaleLowerCase())
              )
            );
          }
          return filteredArticles;
        })
      )
      .subscribe((articles) => {
        this.articleService.articlesChanged.emit(articles);
      });
  }
}
