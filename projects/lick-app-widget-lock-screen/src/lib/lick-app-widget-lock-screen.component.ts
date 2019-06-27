import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-lock-screen',
  templateUrl: './lick-app-widget-lock-screen.component.html',
  styles: []
})
export class LickAppWidgetLockScreenComponent implements OnInit {

  @Input() logoName = "Logo Name";
  @Input() homePageLink = "/";
  @Input() headingText = "Let's Get Started .!";
  @Input() subText = "most powerfull most selling Admin Panel In The World";
  @Input() titleText = "Enter your Password to Unlock";
  @Input() status = "LOCKED";
  @Input() user : User = {
    "name" : "User Name",
    "url" : "http://via.placeholder.com/100x100",
    "shared" : false,
    "publishedAt" : new Date(),
    "lastUpdated" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000),
    "userName" : "User Name"
  };
  @Input() loginText = "This is not me ? Please";
  @Input() loginLink = "/login";
  @Input() loginButtonText = "Login";

  @Output() pageEvent = new EventEmitter();

  public password;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void {
    this.onPageEvent('submit');
  }

  onPageEvent(type: string) : void {
    this.pageEvent.emit(this.password);
  }

}
