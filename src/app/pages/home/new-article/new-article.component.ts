import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { Article } from '../article-list/shared/article';
import { ArticleService } from '../article-list/shared/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  public articleForm = new FormGroup({});
  public article = <Article>{};
  private userName = '';

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.articleForm = this.inizializeFormGroup();
    this.articleForm.valueChanges.subscribe(
      (article) => (this.article = Object.assign({}, article))
    );
  }

  save(): void {
    const article: Article = Object.assign({}, this.articleForm.value);
    this.articleService.createArticle(article);
  }

  abort(): void {
    this.router.navigate(['/home']);
  }

  inizializeFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      author: new FormControl(this.userName),
      image: new FormControl(''),
      created: new FormControl(Date.now()),
      tags: new FormControl(''),
    });
  }
}
