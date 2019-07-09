import { Injectable, Inject } from '@angular/core';
import { LickyLoginConfigService } from './licky-login-config.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
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
  private _firebaseUser:firebase.User;
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
    this.initUsers();
  }

  private userStateChange() {
    firebase.auth().onAuthStateChanged((user : firebase.User) => {
      if (user) {
        this.firebaseUser.next(user);
        this._firebaseUser = user;
        this.isLoggedIn = true;
        console.log("Got firebase User");
        // this.checkUserRecord(user);
      }
    })
  }

  private checkUserRecord(user: firebase.User): void {
    let userRecord = this.getUserByID(user.uid);
    if (!userRecord) {
      this.createUser(user);
    }
  }

  public signInWithUserNameAndPassword(emailAddress: string, password: string, router: Router, redirectURL: string) {
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .then((authData) => {
        console.log(authData);
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


  private setAway() : void {
    if (this._user) {
      this._user.status = 'away';
      this.update();
    }
  }

  private setOnline() : void {
    if (this._user) {
      this._user.status = 'online';
      this.update();
    }
  }

  private setOffline() : void {
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
      this.userChanged.next(null);
    }, function(error) {
      console.log(error);
      this.error.next(error.code);
      this.errorMessage.next(error.message);
    });
  }

  public signInWithGoogle(router: Router, redirectURL: string) {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithRedirect(provider);
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
      .then((authData) => {
        console.log(authData);
        router.navigate([redirectURL])
      })
      .catch(
        error => {
          this.errorMessage.next(error.message)
        });
  }

  private initUsers(): void {
    console.log("Initalize Users");
    this._fds.getDataCollection(USERS).subscribe((users) => {
      if (users) {
        this._users = users;
        console.log("Users > " + JSON.stringify(this._users), "firebaseUser >" + JSON.stringify( this._firebaseUser));
        this.usersChanged.next(this._users);

        if(this._firebaseUser) {
          let u = this._users[this._firebaseUser.uid];
          console.log("initUsers > " + JSON.stringify(u))
        }
      }
    })
  }

  private createUser(fbUser: firebase.User): void {
    let user = new User();
    this.setAppUser(fbUser, user);
    this._fds.updateData(USERS, fbUser.uid, user);
    this._user = user;
    this.userChanged.next(this._user);
  }

  private setAppUser(fbUser: firebase.User, user: User, referral?: string) {
    user.timeStamp = new Date().getTime();
    user.draft = false;
    user.deleted = false;
    user.name = fbUser.displayName;
    user.url = fbUser.photoURL;
    user.user_id = fbUser.uid;
    user.id = fbUser.uid;
    user.user_id = fbUser.uid;
    user.helpNeeded = true;
    user.newsSources = [];
    user.status = 'online';
    if (referral)
      user.referral = referral;
  }


  public getUserByID(id: string): User {
    console.log("getUserByID:" +  JSON.stringify(this._users));
    if (!this._users) return null;
    let u = this._users[id]
    console.log("getUserByID:" + JSON.stringify(u));
    return u;
    // return (this._users) ? (this._users.find(a => a.id == id)) : null;
  }

  private update() {
    if (!this._user) return;
    this._fds.updateData(USERS, this._user.id, this._user);
  }

}
