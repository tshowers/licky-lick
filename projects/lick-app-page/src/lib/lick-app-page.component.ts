import { Component, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, FirebaseDataService } from 'licky-services';
import { Crumb } from 'lick-app-widget-breadcrumb';
import { Subscription } from 'rxjs';
import { User } from 'lick-data';

@Component({
  selector: 'licky-lick-app-page',
  templateUrl: './lick-app-page.component.html',
  styles: []
})
export class LickAppPageComponent implements OnInit, OnDestroy {

  public toggleDisplay = false;
  public diagDisplay = "none";

  public crumbs: Crumb[] = [];
  public pageTitle: string = "Default Title";

  public user : User;

  public firebaseUser;

  public photoURL;
  public displayName;
  public emailAddress;
  public loggedIn;
  public userName;
  public emailVerified;

  protected setupTimer;

  private _userSubscription: Subscription;
  private _firebaseUserSubscription: Subscription;

  @Input() diagnostics;

  constructor(public router: Router, public loginService: LickyLoginService, public db: FirebaseDataService, protected _renderer: Renderer2) {
    this._renderer.addClass(document.body, 'app');
    this._renderer.addClass(document.body, 'sidebar-fixed');
    this._renderer.addClass(document.body, 'aside-menu-off-canvas');
    this._renderer.addClass(document.body, 'aside-menu-hidden');
    this._renderer.addClass(document.body, 'header-fixed');
  }

  ngOnInit() {
    this.setFirebaseUser();
    this.setUser();
  }

  ngOnDestroy() {
    this._firebaseUserSubscription.unsubscribe();
    this._userSubscription.unsubscribe();
  }

  public toggleDiagnostic(): void {
    this.diagDisplay = (this.diagDisplay == "none") ? "" : "none";
    this.toggleDisplay = (this.toggleDisplay) ? false : true;
  }

  public onViewProfile() : void {
    this.router.navigate(['application', 'profile'])
  }

  public onSettings() : void {
    this.router.navigate(['application', 'settings'])
  }

  private setFirebaseUser(): void {
    this._firebaseUserSubscription = this.loginService.firebaseUser.subscribe((firebaseUser) => {
      this.firebaseUser = firebaseUser;
      if (this.firebaseUser) {
        this.setUserProperties();
      }
    })
  }

  private setUser(): void {
    this.user = this.loginService.getUser();
    this._userSubscription = this.loginService.userChanged.subscribe((user) => {
      this.user = user;
    })
  }

  private setUserProperties(): void {
    this.photoURL = this.firebaseUser.photoURL;
    this.displayName = this.firebaseUser.displayName;
    this.emailAddress = this.firebaseUser.email;
    this.loggedIn = true;
    this.userName = this.firebaseUser.email;
    this.emailVerified = this.firebaseUser.emailVerified;
  }

  get diagnostic() {
    return this.diagnostics;
  }
}
