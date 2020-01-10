import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { NotificationService } from '@shared/services/notification.service';
import { NotificationType } from '@shared/models/notification-type';
import { Article } from './article';
import { Tag } from '@app/shared/models/tag';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private articleCollection: AngularFirestoreCollection<Article>;
  public articlesChanged = new EventEmitter<Article[]>();
  public tags: Tag[] = [
    { name: 'Bieberstufe', active: false },
    { name: 'Wolfsstufe', active: false },
    { name: 'Pfadistufe', active: false },
    { name: 'Piostufe', active: false },
    { name: 'Roverstufe', active: false },
    { name: 'Abteilung', active: false }
  ];

  constructor(private afs: AngularFirestore, private notificationService: NotificationService) {
    this.articleCollection = afs.collection<Article>('articles');
  }

  getArticles(): Observable<Article[]> {
    return this.afs.collection<Article>('articles').valueChanges();
  }

  createArticle(article: Article) {
    this.articleCollection
      .add(article as Article)
      .then(value => this.notificationService.notify(NotificationType.SUCCESS, 'Dein Beitrag wurde erfolgreich publiziert'))
      .catch(error => this.notificationService.notify(NotificationType.ERROR, error));
  }
}
