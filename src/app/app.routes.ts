import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewArticleComponent } from './pages/blog/new-article/new-article.component';
import { AbteilungComponent } from './pages/abteilung/abteilung.component';

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
