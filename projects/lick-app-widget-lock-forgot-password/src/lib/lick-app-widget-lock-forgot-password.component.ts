import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Input() titleText = "Forgot Your Password?";
  @Input() instructionText = "Input your registered email to reset your password";
  @Input() loginPageLink = "/login";
  @Input() loginButtonText = "Login";
  @Input() submitButtonText = " Reset Password";
  @Input() loginText = "I know my Password - Please";
  @Input() message;
  @Input() alertType = "info";

  @Output() pageEvent = new EventEmitter();

  public emailAddress;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {
    this.onPageEvent('submit');
  }

  onPageEvent(type: string) : void {
    this.pageEvent.emit(this.emailAddress);
  }

  close() : void {
    this.message = null;
  }

}
