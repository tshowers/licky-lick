import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-signup',
  templateUrl: './lick-app-widget-signup.component.html',
  styles: []
})
export class LickAppWidgetSignupComponent implements OnInit {

  @Input() logoName = "LogoName";
  @Input() homePageLink = "/";
  @Input() headingText = "Let's Get Started .!";
  @Input() subText = " most powerfull most selling Admin Panel In The World";
  @Input() titleText = "Signup";
  @Input() subTitleText = "Create an Account";

  @Input() submitButtonText = "Signup";
  @Input() loginText = "already have an account ? Please";
  @Input() loginButtonText = "Login";
  @Input() loginLink = "/login";

  public userName;
  public email;
  public password;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {

  }

}
