import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'app/core/services/blog/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit() {
    this.articles$ = this.blogService.getArticles();
  }

  openNewArticle(): void {
    this.router.navigate(['new/post']);
  }
}
