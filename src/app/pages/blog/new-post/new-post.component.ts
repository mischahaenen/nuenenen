import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'app/core/services/blog/blog.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewPostComponent implements OnInit {
  public articleForm: FormGroup;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.articleForm = this.inizializeFormGroup();
  }
  save(): void {
    const article: Article = new Article(this.articleForm.value);
    this.blogService.createArticle(article);
  }
  inizializeFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      image: new FormControl(''),
      created: new FormControl(Date.now()),
      tag: new FormControl('')
    });
  }
}
