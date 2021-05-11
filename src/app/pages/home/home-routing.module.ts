import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-article', component: NewArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
