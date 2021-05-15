import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Article } from '@pages/home/models/article';
import { ArticleService } from '@pages/home/services/article.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailResolver implements Resolve<Article | undefined> {
  constructor(private articleService: ArticleService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article | undefined> {
    const id = route.paramMap.get('id') || '';
    return this.articleService.getArticle(id);
  }
}
