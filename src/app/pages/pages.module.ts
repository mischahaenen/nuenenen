import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'app/core/modules/material.module';
import { NextEventsComponent } from './blog/next-events/next-events.component';
import { AbteilungComponent } from './abteilung/abteilung.component';
import { ArticleListComponent } from './blog/article-list.component';
import { NewArticleComponent } from './blog/new-article/new-article.component';

@NgModule({
  declarations: [HomeComponent, ArticleListComponent, NextEventsComponent, NewArticleComponent, AbteilungComponent],
  imports: [CommonModule, AngularFireAuthModule, AngularFirestoreModule, MaterialModule],
  providers: []
})
export class PagesModule {}
