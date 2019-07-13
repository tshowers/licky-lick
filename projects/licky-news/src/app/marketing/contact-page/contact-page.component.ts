import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService} from 'licky-services';
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

  constructor(public router: Router, private _loginService: LickyLoginService) { }

  ngOnInit() {
    this._loginSubscription = this._loginService.firebaseUser.subscribe((user) => {
      this.loggedIn = (user) ? true : false;
      if (maintenance) {
        this.loggedIn = false;
      }
    })
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
  }

  public onPageEvent(value): void {
    console.log(JSON.stringify(value));

  }

}
