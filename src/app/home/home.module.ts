import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HomeComponent } from '@home/home.component';
import { ArticleListComponent } from '@home/article-list/article-list.component';
import { NewArticleComponent } from '@home/article-list/new-article/new-article.component';
import { NextEventsComponent } from '@home/article-list/next-events/next-events.component';
import { MaterialModule } from '@core/modules/material.module';
import { ArticleService } from '@app/home/shared/article.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleCardComponent } from './article-list/article-card/article-card.component';

@NgModule({
  declarations: [HomeComponent, ArticleListComponent, NewArticleComponent, NextEventsComponent, ArticleCardComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, AngularFireAuthModule, AngularFirestoreModule],
  exports: [ArticleCardComponent]
})
export class HomeModule {}
