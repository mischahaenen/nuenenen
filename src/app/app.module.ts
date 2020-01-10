import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { HomeModule } from '@app/home/home.module';
import { AbteilungModule } from '@abteilung/abteilung.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'nünenen-dev'),
    CoreModule,
    SharedModule,
    HomeModule,
    AbteilungModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
