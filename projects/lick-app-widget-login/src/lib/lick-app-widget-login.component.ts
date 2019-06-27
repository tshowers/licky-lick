import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Input() signUpText = "Don't you have an account? Please";
  @Input() signUpLink = "/signup";
  @Input() signUpButtonText = "Sign up";
  @Input() forgotPasswordText = "Forgot your password?";
  @Input() forgotPasswordLink = "/forgot-password";
  @Input() forgotButtonText = "Reset";
  @Input() socialMediaTitle = "social media login";
  @Input() isFacebookLoginButtonEnabled : boolean = true;
  @Input() isTwitterLoginButtonEnabled : boolean = true;
  @Input() isGoogleLoginButtonEnabled : boolean = true;

  @Output() pageEvent = new EventEmitter();


  public emailAddress;
  public password;


  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {
    this.onPageEvent('submit');
  }

  onPageEvent(type: string) : void {
    this.pageEvent.emit({type: type, emailAddress: this.emailAddress, password: this.password});
  }
}
