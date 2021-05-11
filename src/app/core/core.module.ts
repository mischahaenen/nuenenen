import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '@environments/environment';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'nünenen-dev'),
    RouterModule,
    MaterialModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
