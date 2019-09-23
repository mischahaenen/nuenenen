import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'app/core/business/article/article.service';
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

  openNewArticlePage(): void {
    this.router.navigate(['new/article']);
  }
}
