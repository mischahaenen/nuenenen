import { Component, OnInit } from '@angular/core';
import { Upload } from '@shared/models/upload';
import { FileUploadService } from '@shared/services/file-upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {
  currentUpload: Upload;
  dropzoneActive = false;

  constructor(private upSvc: FileUploadService) {}

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {
    console.log(fileList);
  }
}
