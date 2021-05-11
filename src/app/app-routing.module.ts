import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewArticleComponent } from './pages/home/components/new-article/new-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'abteilung',
    loadChildren: () => import('./pages/abteilung/abteilung.module').then((m) => m.AbteilungModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
