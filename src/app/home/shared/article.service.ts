import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
  private articleCollection: AngularFirestoreCollection<Article>;
  private articles: Observable<Article[]>;

  constructor(private afs: AngularFirestore) {
    this.articleCollection = afs.collection('articles');
    this.articles = this.articleCollection.valueChanges();
  }

  getArticles(): Observable<Article[]> {
    return this.articles;
  }

  createArticle(newArticle: Article): void {
    this.articleCollection.add(newArticle);
  }
}
