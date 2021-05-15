import { NgModule } from '@angular/core';
import { MaterialModule } from '@core/modules/material.module';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TimeAgoPipe, FileUploadComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [TimeAgoPipe, FileUploadComponent],
})
export class SharedModule {}
