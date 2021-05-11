import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ArticleCardComponent } from './components/article-card/article-card.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@core/modules/material.module';
import { SharedModule } from '@shared/shared.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NextEventsComponent } from './components/next-events/next-events.component';
import { ArticleFilterComponent } from './components/article-filter/article-filter.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ArticleListComponent,
    NewArticleComponent,
    NextEventsComponent,
    ArticleCardComponent,
    ArticleFilterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [ArticleCardComponent],
})
export class HomeModule {}
