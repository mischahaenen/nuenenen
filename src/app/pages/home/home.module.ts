import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ArticleCardComponent } from './article-list/article-card/article-card.component';
import { ArticleFilterComponent } from './article-list/article-filter/article-filter.component';
import { NextEventsComponent } from './next-events/next-events.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'app/core/modules/material.module';
import { SharedModule } from 'app/shared/shared.module';

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
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
  ],
  exports: [ArticleCardComponent],
})
export class HomeModule {}
