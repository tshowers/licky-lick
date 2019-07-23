import { Injectable, Inject } from '@angular/core';
import { LickyLoginConfigService } from './licky-login-config.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import { FirebaseDataService, GROUPS, USERS } from './firebase-data.service';
import { User, Group } from 'lick-data';

import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LickyLoginService {

  public error = new Subject<any>();
  public errorMessage = new Subject<any>();
  public processMessage = new Subject<any>();
  public usersChanged = new Subject<User[]>();
  public userChanged = new Subject<User>();
  public firebaseUser = new BehaviorSubject<firebase.User>(null);
  private _firebaseUser: firebase.User;
  private _user: User;
  private _users: any;
  public isLoggedIn: boolean = false;
  public redirectUrl;

  constructor(@Inject(LickyLoginConfigService) private config, private _fds: FirebaseDataService) {
    this.initFirebase();
  }

  private initFirebase() {
    firebase.initializeApp(this.config);
    this.userStateChange();
    this._fds.init();
  }

  public getUserByID(id: string): User {
    if (!this._users) return null;
    return this._users[id];
  }

  public getUser(): User {
    return this._user;
  }

  public signInWithUserNameAndPassword(emailAddress: string, password: string, router: Router, redirectURL: string) {
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .then((authData) => {
        // console.log(authData);
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

  public updateUserInfo(firstName: string, lastName: string, firebaseUser: firebase.User): void {
    firebaseUser.updateProfile({
      displayName: firstName + " " + lastName,
    }).then(() => {
      console.log("displayName updated to - " + firebaseUser.displayName);
    },
      (error) => {
        console.error(error)
      }
    )
  }


  public setAway(): void {
    if (this._user) {
      this._user.status = 'away';
      this.update();
    }
  }

  public setOnline(): void {
    if (this._user) {
      this._user.status = 'online';
      this.update();
    }
  }

  public setOffline(): void {
    if (this._user) {
      this._user.status = 'offline';
      this.update();
    }
  }

  public signOut() {
    this.setOffline();

    firebase.auth().signOut().then(() => {
      this.isLoggedIn = false;
      this.firebaseUser.next(null);
      this._user = null;
      this._fds.setUser(null);
      this.userChanged.next(null);
    }, function(error) {
      console.error(error);
      this.error.next(error.code);
      this.errorMessage.next(error.message);
    });
  }

  public signInWithGoogle(router: Router, redirectURL: string) {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(result => {
      console.log("signInWithGoogle:" + JSON.stringify(result.user))
      if (result.user) {

      }
    });
  }

  public signInWithTwitter(router: Router, redirectURL: string) {
    var provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  }

  public signInWithFacebook(router: Router, redirectURL: string) {
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope('user_birthday');

    firebase.auth().signInWithRedirect(provider);
  }


  public sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification().then(() => {
      this.processMessage.next('Email Verification Sent!')
    }).catch((error) => {
      console.error(JSON.stringify(error), JSON.stringify(firebase.auth().currentUser));
      this.processMessage.next('Unable to process request');
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
        console.error(error);
        this.error.next(error.code);
      });
  }

  public signUpUser(emailAddress: string, password: string, firstName: string, lastName: string, url: string, router: Router, redirectURL: string, referral?: string) {
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .then((authData) => {
        if (firstName && lastName)
          this.updateUserInfo(firstName, lastName, authData.user);
        router.navigate([redirectURL])
      })
      .catch(
        error => {
          this.errorMessage.next(error.message)
        });
  }

  private userStateChange() {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        this.firebaseUser.next(user);
        this._firebaseUser = user;
        this.isLoggedIn = true;
        this.initUsers();
      }
    })
  }

  private initUsers(): void {
    this._fds.getDataCollection(USERS).subscribe((users) => {
      if (!users) {
        console.log("No Users");
        this.createUser();
      } else {
        this._users = users;
        this.usersChanged.next(this._users);

        try {
          // console.log("Users > " + JSON.stringify(this._users));
          let u = this._users[this._firebaseUser.uid];
          // console.log("User retrieved > " + JSON.stringify(u));

          if (u === null || typeof u != 'object') {
            this.createUser();
          } else {
            this.setFirebaseAttributes(u);
          }

        } catch (err) {
          console.error(err);
        }
      }
    })
  }

  private createUser(): void {
    let user = new User();
    this.setAppUser(user);
    this._fds.updateData(USERS, this._firebaseUser.uid, user);
  }

  private setAppUser(user: User, referral?: string) {
    if (referral)
      user.referral = referral;
    user.timeStamp = new Date().getTime();
    user.draft = false;
    user.deleted = false;
    user.helpNeeded = true;
    user.newsSources = [];
    user.status = 'online';
    user.lastViewed = new Date();
    this.setFirebaseAttributes(user);
  }

  private setFirebaseAttributes(user: User) {
    user.name = this._firebaseUser.displayName;
    user.url = this._firebaseUser.photoURL;
    user.user_id = this._firebaseUser.uid;
    user.userName = this._firebaseUser.email;
    user.userImage = this._firebaseUser.photoURL;
    user.id = this._firebaseUser.uid;
    user.user_id = this._firebaseUser.uid;
    user.lastUpdatedBy = this._firebaseUser.displayName;
    this._user = user;
    this._fds.setUser(this._user);
    this.userChanged.next(this._user);
  }

  public update(): void {
    if (!this._user) return;
    this._fds.updateData(USERS, this._user.id, this._user);
    this.userChanged.next(this._user);
  }

}
