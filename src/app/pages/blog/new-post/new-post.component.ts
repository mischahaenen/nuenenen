import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'app/core/services/blog/blog.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public postForm: FormGroup;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.postForm = this.inizializeFormGroup();
  }
  save(): void {
    const post: Post = new Post(this.postForm.value);
    this.blogService.createPost(post);
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
