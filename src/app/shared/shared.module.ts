import { NgModule } from '@angular/core';
import { MaterialModule } from '@core/modules/material.module';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { DropzoneDirective } from './directives/dropzone.directive';
import { FileUploadTaskComponent } from './components/file-upload-task/file-upload-task.component';

@NgModule({
  declarations: [TimeAgoPipe, FileUploadComponent, DropzoneDirective, FileUploadTaskComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [TimeAgoPipe, FileUploadComponent],
})
export class SharedModule {}
