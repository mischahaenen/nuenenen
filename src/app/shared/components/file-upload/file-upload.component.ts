import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotificationType } from '@shared/models/notification-type';
import { NotificationService } from '@shared/services/notification.service';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  isHovering = false;
  files: File[] = [];

  constructor(private notificationService: NotificationService) {}

  toggleHover(isHovering: boolean): void {
    this.isHovering = isHovering;
  }

  onDrop(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const type = files[i].type;
      if (type.startsWith('image')) this.files.push(files[i]);
      else
        this.notificationService.notify(
          NotificationType.ERROR,
          'Es können nur Bilder zu deinem Artikel hinzugefügt werden'
        );
    }
  }
  onInput(event: any): void {
    const files = event.target.files as FileList;
    this.onDrop(files);
  }
}
