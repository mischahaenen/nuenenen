import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularFireAuthModule, AngularFirestoreModule],
  providers: [AuthService]
})
export class CoreModule {}
