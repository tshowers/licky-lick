import { Injectable, Inject } from '@angular/core';
import { LickyLoginConfigService } from './licky-login-config.service';
import { Router } from '@angular/router';

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
  public isLoggedIn : boolean = false;
  public redirectUrl;

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
        this.isLoggedIn = true;
      }
    })
  }

  public signInWithUserNameAndPassword(emailAddress: string, password: string, router: Router, redirectURL: string) {
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .then((credential) => {
        console.log("successful signin");
        this.isLoggedIn = true;
        router.navigate([redirectURL]);
      })
      .catch((error) => {
        // Route to error page
        this.error.next(error.code);
        this.errorMessage.next(error.message);
      })
  }

  public signInWithGoogle(router: Router, redirectURL: string) {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult()
      .then((authData) => {
        this.isLoggedIn = true;
        router.navigate([redirectURL]);
        // console.log(authData);
      })
      .catch(function(error) {
        console.log(error);
        this.error.next(error.code);
        this.errorMessage.next(error.message);
      });
  }

  public signOut() {
    firebase.auth().signOut().then(() => {
      this.isLoggedIn = false;
    }, function(error) {
      console.log(error);
      this.error.next(error.code);
      this.errorMessage.next(error.message);
    });
  }

  public signInWithTwitter(router: Router, redirectURL: string) {
    var provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(authData) {
      this.isLoggedIn = true;
      router.navigate([redirectURL]);
    }).catch(function(error) {
      console.log(error);
      this.error.next(error.code);
      this.errorMessage.next(error.message);
    });
  }

  public signInWithFacebook(router: Router, redirectURL: string) {
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope('user_birthday');

    firebase.auth().signInWithPopup(provider).then(function(authData) {
      this.isLoggedIn = true;
      router.navigate([redirectURL]);
    }).catch(function(error) {
      console.log(error);
      this.error.next(error.code);
      this.errorMessage.next(error.message);
    });
  }


  public sendEmailVerification(router: Router, redirectURL: string) {
    firebase.auth().currentUser.sendEmailVerification().then(() => {
      this.processMessage.next('Email Verification Sent!')
    });
  }

  public sendPasswordReset(emailAddress: string, router: Router, redirectURL: string) {
    firebase.auth().sendPasswordResetEmail(emailAddress)
    .then(() => {
      this.processMessage.next('Password Reset Email Sent!');
    }).catch((error) => {
      var errorCode = error.code;

      if (errorCode == 'auth/invalid-email') {
        this.errorMessage.next(error.message);
      } else if (errorCode == 'auth/user-not-found') {
        this.errorMessage.next(error.message);
      }
      console.log(error);
      this.error.next(error.code);
    });
  }

  public signUpUser(emailAddress: string, password: string, firstName: string, lastName: string, url: string, router: Router, redirectURL: string, referral?: string) {
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .then(() => {
        router.navigate([redirectURL])
      })
      .catch(
        error => {
          this.errorMessage.next(error.message)
        });
  }

}
