import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './pages/blog/new-post/new-post.component';
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
        path: 'post',
        component: NewPostComponent
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
