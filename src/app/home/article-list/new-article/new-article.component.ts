import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '@home/shared/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  public articleForm: FormGroup;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articleForm = this.inizializeFormGroup();
  }

  save(): void {
    const article: Article = new Article(this.articleForm.value);
    this.articleService.createArticle(article);
  }

  abort(): void {
    this.router.navigate(['/home']);
  }

  inizializeFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      author: new FormControl('me'),
      image: new FormControl(''),
      created: new FormControl(Date.now()),
      tags: new FormControl('')
    });
  }
}
