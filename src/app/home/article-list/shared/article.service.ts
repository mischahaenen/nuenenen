import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { NotificationService } from '@shared/services/notification.service';
import { NotificationType } from '@shared/models/notification-type';
import { Article } from './article';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private articleCollection: AngularFirestoreCollection<Article>;
  private articles: Observable<Article[]>;
  articlesChanged = new EventEmitter<Article[]>();

  constructor(private afs: AngularFirestore, private notificationService: NotificationService) {
    this.articleCollection = afs.collection<Article>('articles');
    this.articles = this.articleCollection.valueChanges();
  }

  getArticles(): Observable<Article[]> {
    return this.articles;
  }

  createArticle(article: Article) {
    this.articleCollection
      .add(article as Article)
      .then(value => this.notificationService.notify(NotificationType.SUCCESS, 'Dein Beitrag wurde erfolgreich publiziert'))
      .catch(error => this.notificationService.notify(NotificationType.ERROR, error));
  }
}
