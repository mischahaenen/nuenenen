import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { Tag } from '@pages/home/models/tag';
import { TagService } from '@pages/home/services/tag.service';
import { User } from '@shared/models/user';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  articleForm = new FormGroup({});
  article = <Article>{};
  tags$: Observable<Tag[]> = of([]);
  plugins: string[] = [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount',
  ];
  toolbar: string =
    'undo redo | formatselect | bold italic | bullist numlist outdent indent | removeformat | help';

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private authService: AuthService,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.tags$ = this.tagService.getTags();
    this.articleForm = this.inizializeFormGroup();
    this.articleForm.valueChanges.subscribe(
      (article) => (this.article = Object.assign({}, article))
    );
    this.getAuthor();
  }

  getAuthor() {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.articleForm.controls.author.setValue(user.displayName);
        this.articleForm.controls.author_image.setValue(user.photoURL);
      }
    });
  }

  save(): void {
    const article: Article = Object.assign({}, this.articleForm.value);
    this.articleService.createArticle(article);
    this.router.navigate(['/home']);
  }

  abort(): void {
    this.router.navigate(['/home']);
  }

  inizializeFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      author: new FormControl(''),
      author_image: new FormControl(''),
      image: new FormControl(),
      created: new FormControl(Date.now()),
      tag: new FormControl('', Validators.required),
    });
  }
}
