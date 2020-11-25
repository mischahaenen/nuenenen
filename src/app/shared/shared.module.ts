import { NgModule } from '@angular/core';
import { MaterialModule } from 'app/core/modules/material.module';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { FileDropDirective } from './directives/file-drop.directive';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [TimeAgoPipe, FileDropDirective, UploadFormComponent],
  imports: [CommonModule, MaterialModule,AngularFireDatabaseModule],
  exports: [TimeAgoPipe, UploadFormComponent]
})
export class SharedModule {}
