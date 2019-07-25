import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LickyLoginService, DateUtilService } from 'licky-services';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-news-login',
  templateUrl: './news-login.component.html',
  styleUrls: ['./news-login.component.css']
})
export class NewsLoginComponent implements OnInit, OnDestroy {

  public emailAddress;

  public password;

  private _loginError: Subscription;

  private _userSubscription: Subscription;

  public errorMessage;


  constructor(public router: Router, private _loginService: LickyLoginService, private _dateUtilService: DateUtilService) { }

  ngOnInit() {
    this.subscribeToLoginErrors();

    this.determineUser();
  }

  ngOnDestroy() {
    if (this._loginError)
      this._loginError.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  private determineUser(): void {
    this._userSubscription = this._loginService.firebaseUser.subscribe((firebaseUser) => {
      let status: boolean = (firebaseUser && firebaseUser.uid) ? true : false
      this.getVerified(firebaseUser);
      this.router.navigate(['application', 'news']);
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
    // if (firebaseUser.verified) {
    //   return true;
    // } else {
    //
    //
    //   return false;
    // }
  }


  public onPageEvent(value): void {
    // console.log(value);
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

  private subscribeToLoginErrors(): void {
    this._loginError = this._loginService.errorMessage.subscribe((error) => {
      console.log(error);
      this.errorMessage = "\n\n" + error;
    })
  }

  private onUserEmail(): void {
    console.log("Siging in with " + this.emailAddress + " " + this.password)
    this._loginService.signInWithUserNameAndPassword(this.emailAddress, this.password, this.router, "/application/news");
  }

  private onTwitter(): void {
    this._loginService.signInWithTwitter(this.router, "/application/news");
  }

  private onFacebook(): void {
    this._loginService.signInWithFacebook(this.router, "/application/news");
  }

  private onGoogle(): void {
    this._loginService.signInWithGoogle(this.router, "/application/news");
  }

}
