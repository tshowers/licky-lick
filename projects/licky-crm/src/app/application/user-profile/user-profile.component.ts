import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, FirebaseDataService, SortHelperService, CONTACTS } from 'licky-services';
import { LickAppPageComponent } from 'lick-app-page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends LickAppPageComponent implements OnInit, OnDestroy {

  user;
  firebaseUser;
  message;

  private _userSubscription: Subscription;
  private _firebaseUserSubscription: Subscription;

  constructor(protected renderer2: Renderer2, public loginService: LickyLoginService, public router: Router, public db: FirebaseDataService, private _sortHelper: SortHelperService) {
    super(router, loginService, db, renderer2);
  }

  ngOnInit() {
    this._firebaseUserSubscription = this.loginService.firebaseUser.subscribe((firebaseUser) => {
      this.firebaseUser = firebaseUser;
    })
    this.setUser();
    this.setBreadCrumb();
  }

  ngOnDestroy() {
    this._firebaseUserSubscription.unsubscribe();
    this._userSubscription.unsubscribe();
  }

  private setUser() : void {
    this.user = this.loginService.getUser();
    this._userSubscription = this.loginService.userChanged.subscribe((user) => {
      this.user = user;
    })

  }

  private setBreadCrumb(): void {
    this.crumbs = [
      { name: "home", link: "/", active: false },
      { name: "profile", link: "/application/profile", active: true }
    ]
  }

  onPageEvent() {
    this.loginService.sendEmailVerification();
    this.message = "Check your email.";
  }

}
