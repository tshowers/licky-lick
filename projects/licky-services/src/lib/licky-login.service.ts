import { Injectable, Inject } from '@angular/core';
import { LickyLoginConfigService } from './licky-login-config.service';

import * as firebase from 'firebase';

import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LickyLoginService {

  public error = new Subject<any>();
  public errorMessage = new Subject<any>();
  public processMessage = new Subject<any>();
  public firebaseUser = new Subject<firebase.User>();

  constructor(@Inject(LickyLoginConfigService) private config) {
    this.initFirebase()
  }

  private initFirebase() {
    firebase.initializeApp(this.config);

    this.userStateChange();
  }

  private userStateChange() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.firebaseUser.next(user);
      }
    })
  }

  public signInWithUserNameAndPassword(emailAddress, password) {
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password).catch((error) => {
      this.error.next(error.code);
      this.errorMessage.next(error.message);
    })
  }

  public signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then((authData) => {
      console.log(authData);
    }).catch(function(error) {
      console.log(error);
    });
  }

  public signOut() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }, function(error) {
      console.log(error);
    });
  }


  public sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification().then(() => {
      this.processMessage.next('Email Verification Sent!')
    });
  }

  public sendPasswordReset(emailAddress: string) {
    firebase.auth().sendPasswordResetEmail(emailAddress).then(() => {
      this.processMessage.next('Password Reset Email Sent!');
    }).catch((error) => {
      var errorCode = error.code;

      if (errorCode == 'auth/invalid-email') {
        this.errorMessage.next(error.message);
      } else if (errorCode == 'auth/user-not-found') {
        this.errorMessage.next(error.message);
      }
      console.log(error);
    });
  }

  public signUpUser(emailAddress: string, password: string, firstName: string, lastName: string, url: string, referral?: string) {
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .catch(
        error => {
          this.errorMessage.next(error.message)
        });
  }

}
