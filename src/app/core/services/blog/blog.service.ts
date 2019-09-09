import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private postCollection: AngularFirestoreCollection<Post>;
  private posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {
    this.postCollection = afs.collection('posts');
    this.posts = this.postCollection.valueChanges();
  }

  getPosts(): Observable<Post[]> {
    return this.posts;
  }

  createPost(newPost: Post): void {
    this.postCollection.add(newPost);
  }
}
