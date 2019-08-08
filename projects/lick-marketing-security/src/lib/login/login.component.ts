import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, DateUtilService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'licky-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public emailAddress;

  public password;

  private _loginError: Subscription;

  private _userSubscription: Subscription;

  public errorMessage;

  @Input() successRoute : string = "/";

  @Input() logoName = "16 AHEAD";

  @Input() headingText = "16 AHEAD";

  @Input() signUpLink = "/application/sign-up";

  @Input() forgotPasswordLink = "/application/forgot-password";

  constructor(public router: Router, private _loginService: LickyLoginService, private _dateUtilService: DateUtilService) { }

  ngOnInit() {
    this.subscribeToLoginErrors();

    this.determineUser();
  }

  private determineUser(): void {
    this._userSubscription = this._loginService.firebaseUser.subscribe((firebaseUser) => {
      let status: boolean = (firebaseUser && firebaseUser.uid) ? true : false;
      if (status) {
        console.log("LIBRARY: " , firebaseUser, status);
        this.getVerified(firebaseUser);
        this.router.navigate([this.successRoute]);
      }
    })
  }


  ngOnDestroy() {
    if (this._loginError)
      this._loginError.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  private subscribeToLoginErrors(): void {
    this._loginError = this._loginService.errorMessage.subscribe((error) => {
      console.log(error);
      this.errorMessage = "\n\n" + error;
    })
  }

  private getVerified(firebaseUser): boolean {
    let today = new Date().getTime();
    if (firebaseUser) {
      let creationTime = firebaseUser.metadata.creationTime;
      let createdAt = new Date(creationTime).getTime();
      console.log(createdAt, today);
      let diff = this._dateUtilService.getDaysDiff(today, createdAt);
      console.log(diff);
    }
    return true;
  }

  public onPageEvent(value): void {
    switch (value.type) {
      case 'submit':
        this.emailAddress = value.emailAddress;
        this.password = value.password;
        this.onUserEmail();
        break;
      case 'google':
        this.onGoogle();
        break;
      case 'twitter':
        this.onTwitter();
        break;
      case 'facebook':
        this.onFacebook();
        break;
      default:
        this.errorMessage = "Unable to log in";
        break;
    }
  }

  private onUserEmail(): void {
    console.log("Siging in with " + this.emailAddress + " " + this.password)
    this._loginService.signInWithUserNameAndPassword(this.emailAddress, this.password, this.router, this.successRoute);
  }

  private onTwitter(): void {
    this._loginService.signInWithTwitter(this.router, this.successRoute);
  }

  private onFacebook(): void {
    this._loginService.signInWithFacebook(this.router, this.successRoute);
  }

  private onGoogle(): void {
    this._loginService.signInWithGoogle(this.router, this.successRoute);
  }


}
