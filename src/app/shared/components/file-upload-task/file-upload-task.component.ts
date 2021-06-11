import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload-task',
  templateUrl: './file-upload-task.component.html',
  styleUrls: ['./file-upload-task.component.scss'],
})
export class FileUploadTaskComponent implements OnInit {
  @Input() file!: File;

  task!: AngularFireUploadTask;

  percentage: Observable<number | undefined> = of(0);
  snapshot: Observable<any> = of();
  downloadURL = '';

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {}

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('files').add({ downloadURL: this.downloadURL, path });
      })
    );
  }

  isActive(snapshot: any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
