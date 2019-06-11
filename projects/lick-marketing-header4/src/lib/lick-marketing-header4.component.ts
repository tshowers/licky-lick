import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-header4',
  templateUrl: './lick-marketing-header4.component.html',
  styles: []
})
export class LickMarketingHeader4Component implements OnInit {

  @Input() heading1 = "Awesome";
  @Input() heading2 = "software";
  @Input() headerText = "Present your awesome product";
  @Input() descriptionText = "Delectus, ut perspiciatis, unde omnis voluptas nulla vero. Facilis est laborum et harum quidem rerum necessitatibus saepe. Magni dolores et molestiae consequatur, vel illum, qui.";
  emailAddress;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submit Clicked")
  }

}
