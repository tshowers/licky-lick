import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'lick-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = false;

  firebaseUser: firebase.User;

  userProfile: User;

  redirectUrl: string;

  setStatus(status: boolean): void {
    this.isLoggedIn = status;
  }

}
