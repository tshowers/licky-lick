import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LickyLoginService } from 'licky-services';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

export const maintenance = environment.maintenance;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  @Input() loggedIn: boolean = false;

  menuItems: any[] = [
    {
      "link": "/",
      "name": "Home",
    },
    {
      "link": "/products",
      "name": "Products",
    },
    {
      "link": "/factory",
      "name": "Factory",
    }
  ]

  loggedInMenuItems: any[] = [
    {
      "link": "/",
      "name": "Home",
    },
    {
      "link": "/products",
      "name": "Products",
    },
    {
      "link": "/factory",
      "name": "Factory",
    }
  ]


  verified: boolean = false;
  verificationText = "Unverified";
  profileLink = "/application/profile";
  profileImage;
  displayName;
  private _messageSubscription: Subscription;

  private _loginSubscription: Subscription;

  constructor(private _loginService: LickyLoginService) { }

  ngOnInit() {
    this._loginSubscription = this._loginService.firebaseUser.subscribe((user) => {
      this.loggedIn = (user) ? true : false;
      this.setVerified(user);
      if (maintenance) {
        this.loggedIn = false;
      }
    })

    this._messageSubscription = this._loginService.processMessage.subscribe((message) => {
      this.verificationText = message;
    })
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
    this._messageSubscription.unsubscribe();
  }

  onMenuEvent(value): void {
    console.log(value);
    // this.verificationText = 'Check your Inbox';
    this._loginService.sendEmailVerification();
  }

  private setVerified(user): void {
    if (user) {
      this.verified = user.emailVerified;
      this.displayName = user.displayName;
      if (user.photoURL)
        this.profileImage = user.photoURL;
    }
  }

}
