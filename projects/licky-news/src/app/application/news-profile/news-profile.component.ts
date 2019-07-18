import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-profile',
  templateUrl: './news-profile.component.html',
  styleUrls: ['./news-profile.component.css']
})
export class NewsProfileComponent implements OnInit, OnDestroy {

  user;
  firebaseUser;
  message;

  private _userSubscription: Subscription;
  private _firebaseUserSubscription: Subscription;
  private _messageSubscription: Subscription;


  constructor(public router: Router, private _lickyLoginService: LickyLoginService) { }

  ngOnInit() {
    this._firebaseUserSubscription = this._lickyLoginService.firebaseUser.subscribe((firebaseUser) => {
      this.firebaseUser = firebaseUser;
    })

    this._messageSubscription = this._lickyLoginService.processMessage.subscribe((message) => {
      this.message = message;
    })
  }

  ngOnDestroy() {
    this._userSubscription.unsubscribe();
    this._firebaseUserSubscription.unsubscribe();
  }

  onPageEvent() {
    this._lickyLoginService.sendEmailVerification();
    // this.router.navigate(['about', 'message']);
  }

  private setUser() : void {
    this.user = this._lickyLoginService.getUser();
    this._userSubscription = this._lickyLoginService.userChanged.subscribe((user) => {
      this.user = user;
    })

  }

}
