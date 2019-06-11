import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-contact-us1',
  templateUrl: './lick-marketing-contact-us1.component.html',
  styles: []
})
export class LickMarketingContactUs1Component implements OnInit {

  @Input() headingText = "Contact Us";
  @Input() descriptionText = "We also don't like spam";

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit clicked')
  }


}
