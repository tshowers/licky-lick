import { Injectable } from '@angular/core';
import { LickyLoginService} from 'licky-services';
import * as firebase from 'firebase';
import { User } from 'lick-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _loginService: LickyLoginService) { }

  isLoggedIn = false;

  firebaseUser: firebase.User;

  userProfile: User;

  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.create((observer) => {
      this._loginService.firebaseUser
      .subscribe((firebaseUser) => {
        observer.next((firebaseUser && firebaseUser.uid))
        observer.complete()
      })
    })
  }

  setStatus(status: boolean): void {
    this.isLoggedIn = status;
  }
}
