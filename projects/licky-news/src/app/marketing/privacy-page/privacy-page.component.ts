import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteAssetService,  LickyLoginService } from 'licky-services';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

export const maintenance = environment.maintenance;

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent implements OnInit, OnDestroy {

  public headingText = "Terms of Service";
  public backgroundImage = 'assets/images/terms-of-service.jpg';
  public bodyText;
  private _loginSubscription : Subscription;
  private _fileSubscription : Subscription;

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

  constructor(public router: Router, private _remoteAssetService: RemoteAssetService, private _loginService: LickyLoginService) { }

  ngOnInit() {

    // User Subscription
    this._loginSubscription = this._loginService.firebaseUser.subscribe((user) => {
      this.loggedIn = (user) ? true : false;
      if (maintenance) {
        this.loggedIn = false;
      }
    })

    // Get Terms of service from file
    this._fileSubscription = this._remoteAssetService.getFileContents('./assets/terms.txt', this._remoteAssetService.TEXT)
    .subscribe({
      next: data => {this.bodyText = data; console.log(data)},
      error: err => console.error(err)
    })
  }

  ngOnDestroy() {
    this._loginSubscription.unsubscribe();
    this._fileSubscription.unsubscribe();
  }

}
