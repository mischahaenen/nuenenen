import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import firebase from 'firebase/app';
import { User } from 'app/shared/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Observable<any>();

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    //// Get auth data, then get firestore user document || null
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider).then((credential) => {
      if (credential.user) {
        this.updateUserData(credential.user);
      }
    });
  }

  private updateUserData(user: firebase.User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email || 'unknown',
      displayName: user.displayName || 'unknown',
      photoURL: user.photoURL || 'unknown',
    };

    return userRef.set(data, { merge: true });
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  get currentUserObservable(): any {
    return this.afAuth;
  }
}
