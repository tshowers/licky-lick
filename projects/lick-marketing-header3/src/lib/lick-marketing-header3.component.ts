import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-header3',
  templateUrl: './lick-marketing-header3.component.html',
  styles: []
})
export class LickMarketingHeader3Component implements OnInit {

  @Input() heading = "Awesome software";
  @Input() headerText = "Our awesome product";
  @Input() descriptionText = "Delectus, ut perspiciatis, unde omnis voluptas nulla vero. Facilis est laborum et harum quidem rerum necessitatibus saepe. Magni dolores et molestiae consequatur, vel illum, qui.";
  @Input() buttonLink1 = "/";
  @Input() buttonLink2 = "/";

  @Input() buttonText1 = "Sign Up";
  @Input() buttonText2 = "Read More";

  @Input() imageURL1 = "http://via.placeholder.com/1525x880";
  @Input() imageURL2 = "http://via.placeholder.com/460x118";

  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(link) : void {
    this.pageEvent.emit(link);
  }

}
