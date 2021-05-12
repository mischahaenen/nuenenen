import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private tagCollection: AngularFirestoreCollection<Tag>;

  constructor(private afs: AngularFirestore) {
    this.tagCollection = afs.collection<Tag>('tags');
  }

  getTags(): Observable<Tag[]> {
    return this.tagCollection.valueChanges();
  }
}
