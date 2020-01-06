import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbteilungComponent } from '@abteilung/abteilung.component';
import { HomeComponent } from '@home/home.component';
import { NewArticleComponent } from '@home/article-list/new-article/new-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'abteilung', component: AbteilungComponent },
  { path: 'mitmachen', component: HomeComponent },
  { path: 'shop', component: HomeComponent },
  {
    path: 'new',
    children: [
      {
        path: 'article',
        component: NewArticleComponent
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
