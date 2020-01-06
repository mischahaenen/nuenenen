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

@NgModule({
  declarations: [HomeComponent, ArticleListComponent, NewArticleComponent, NextEventsComponent],
  imports: [CommonModule, MaterialModule, AngularFireAuthModule, AngularFirestoreModule],
  providers: [ArticleService]
})
export class HomeModule {}
