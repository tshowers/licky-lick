import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-header2',
  templateUrl: './lick-marketing-header2.component.html',
  styles: []
})
export class LickMarketingHeader2Component implements OnInit {

  @Input() headingText = 'Present your awesome product';
  @Input() descriptionText = 'Delectus, ut perspiciatis, unde omnis voluptas nulla vero. Facilis est laborum et harum quidem rerum necessitatibus saepe. Magni dolores et molestiae consequatur, vel illum, qui.';
  @Input() button1Text = 'Sign Up';
  @Input() button1Link = "/";
  @Input() button1Visible = true;
  @Input() button2Text = 'Read More';
  @Input() button2Link = "/";
  @Input() button2Visible = true;
  @Input() imageURL = "http://via.placeholder.com/600x1220";

  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(link) : void {
    this.pageEvent.emit(link);
  }

}
