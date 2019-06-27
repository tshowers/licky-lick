import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Input() loginText = "Already have an account? Please";
  @Input() loginButtonText = "Login";
  @Input() loginLink = "/login";

  @Output() pageEvent = new EventEmitter();

  public firstName;
  public lastName;
  public emailAddress;
  public password;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {
    this.onPageEvent('submit');
  }

  onPageEvent(type: string) : void {
    this.pageEvent.emit(
      {
        type: type,
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        password: this.password
      });
  }

}
