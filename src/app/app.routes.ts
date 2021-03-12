import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbteilungComponent } from './pages/abteilung/abteilung.component';
import { NewArticleComponent } from './pages/home/article-list/new-article/new-article.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'abteilung', component: AbteilungComponent },
  { path: 'mitmachen', component: HomeComponent },
  { path: 'shop', component: HomeComponent },
  {
    path: 'new-article',
    component: NewArticleComponent
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
