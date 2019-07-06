import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService} from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

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
    })
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
  }

}
