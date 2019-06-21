import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-login',
  templateUrl: './lick-app-widget-login.component.html',
  styles: []
})
export class LickAppWidgetLoginComponent implements OnInit {

  @Input() logoName = "LogoName";
  @Input() homePageLink = "/";
  @Input() headingText = "Let's Get Started .!";
  @Input() subText = "most powerfull most selling Admin Panel In The World";
  @Input() titleText = "Login";
  @Input() submitButtonText = "Log In";
  @Input() signUpText = "Don't you have an account ? Please";
  @Input() signUpLink = "/signup";
  @Input() signUpButtonText = "Sign up";
  @Input() socialMediaTitle = "social media login";
  @Input() isFacebookLoginButtonEnabled : boolean = true;
  @Input() isTwitterLoginButtonEnabled : boolean = true;
  @Input() isGoogleLoginButtonEnabled : boolean = true;

  public emailAddress;
  public password;


  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {

  }

  loginWithFacebook() : void {

  }

  loginWithTwitter() : void {

  }

  loginWithGoogle() : void {

  }

}
