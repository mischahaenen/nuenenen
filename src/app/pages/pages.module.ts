import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { MaterialModule } from 'app/core/modules/material.module';
import { NextEventsComponent } from './blog/next-events/next-events.component';
import { NewPostComponent } from './blog/new-post/new-post.component';

@NgModule({
  declarations: [HomeComponent, BlogComponent, NextEventsComponent, NewPostComponent],
  imports: [CommonModule, AngularFireAuthModule, AngularFirestoreModule, MaterialModule],
  providers: []
})
export class PagesModule {}
