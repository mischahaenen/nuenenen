import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NotificationService } from '@shared/services/notification.service';
import { NotificationType } from '@shared/models/notification-type';
import { Article } from '../models/article';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private articleCollection: AngularFirestoreCollection<Article>;
  articlesChanged = new EventEmitter<Article[]>();

  constructor(private afs: AngularFirestore, private notificationService: NotificationService) {
    this.articleCollection = afs.collection<Article>('articles');
  }

  getArticles(): Observable<Article[]> {
    return this.afs.collection<Article>('articles').valueChanges({ idField: 'id' });
  }

  getArticle(id: string): Observable<Article | undefined> {
    return this.afs.doc<Article>(`articles/${id}`).valueChanges({ idField: 'id' }).pipe(first());
  }

  createArticle(article: Article) {
    this.articleCollection
      .add(article)
      .then(() =>
        this.notificationService.notify(
          NotificationType.SUCCESS,
          'Dein Beitrag wurde erfolgreich publiziert'
        )
      )
      .catch((error) => this.notificationService.notify(NotificationType.ERROR, error));
  }
}
