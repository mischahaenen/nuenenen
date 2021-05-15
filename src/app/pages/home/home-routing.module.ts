import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleDetailResolver } from './components/article-detail/article-detail.resolver';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewArticleComponent },
  { path: ':id', component: ArticleDetailComponent, resolve: { article: ArticleDetailResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
