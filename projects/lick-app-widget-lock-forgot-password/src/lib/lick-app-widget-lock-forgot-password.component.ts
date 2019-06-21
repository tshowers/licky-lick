import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-lock-forgot-password',
  templateUrl: './lick-app-widget-lock-forgot-password.component.html',
  styles: []
})
export class LickAppWidgetLockForgotPasswordComponent implements OnInit {

  @Input() logoName = "LogoName";
  @Input() homePageLink = "/";
  @Input() headingText = "Let's Get Started .!";
  @Input() subText = "most powerfull most selling Admin Panel In The World";
  @Input() titleText = "Forgot Your Password ?";
  @Input() instructionText = "Input your registered email to reset your password";
  @Input() loginPageLink = "/login";
  @Input() loginButtonText = "Login";
  @Input() submitButtonText = " Reset Password";
  @Input() loginText = "I know My Password - Please";

  public email;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {

  }

}
