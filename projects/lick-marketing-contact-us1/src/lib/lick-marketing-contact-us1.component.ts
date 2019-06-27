import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-contact-us1',
  templateUrl: './lick-marketing-contact-us1.component.html',
  styles: []
})
export class LickMarketingContactUs1Component implements OnInit {

  @Input() headingText = "Contact Us";
  @Input() descriptionText = "We also don't like spam";

  @Output() pageEvent = new EventEmitter();

  public firstName;
  public lastName;
  public emailAddress;
  public message;

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
        message: this.message
      });
  }


}
