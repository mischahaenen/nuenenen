import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@app/home/home.module';
import { AbteilungModule } from '@abteilung/abteilung.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    SharedModule,
    HomeModule,
    AbteilungModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
