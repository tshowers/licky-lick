import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, FirebaseDataService} from 'licky-services';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

export const maintenance = environment.maintenance;

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  private _loginSubscription : Subscription;
  private _errorSubscription: Subscription;
  errorMessage;
  loggedIn: boolean = false;

  menuItems: any[] = [
    {
      "link" : "/about",
      "name" : "Home",
    },
    {
      "link" : "/application/sign-up",
      "name" : "Sign Up"
    },
    {
      "link" : "/application/login",
      "name" : "Login"
    },
  ]

  loggedInMenuItems: any[] = [
    {
      "link" : "/about",
      "name" : "Home",
    },
    {
      "link": "/application/news",
      "name": "News",
    },
    {
      "link": "/application/news-selector",
      "name": "News Selector"
    },
    {
      "link": "/application/logout",
      "name": "Log Out"
    },
  ]

  constructor(public router: Router, private _loginService: LickyLoginService, private _fds: FirebaseDataService) { }

  ngOnInit() {
    this._loginSubscription = this._loginService.firebaseUser.subscribe((user) => {
      this.loggedIn = (user) ? true : false;
      if (maintenance) {
        this.loggedIn = false;
      }
    })

    this._errorSubscription = this._fds.databaseError.subscribe((message) => {
      this.errorMessage = message;
    })
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
    this._errorSubscription.unsubscribe();
  }

  public onPageEvent(value): void {
    // console.log(JSON.stringify(value));
    this._fds.writeData('/inquiries', {
      firstName: value.firstName,
      lastName: value.lastName,
      emailAddress: value.emailAddress,
      message: value.message
    })
    this.router.navigate(['about', 'message']);
  }

}
