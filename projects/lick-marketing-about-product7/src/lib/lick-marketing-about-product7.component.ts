import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-about-product7',
  templateUrl: './lick-marketing-about-product7.component.html',
  styles: []
})
export class LickMarketingAboutProduct7Component implements OnInit {

  @Input() imageURL = "http://via.placeholder.com/1440x1075";
  @Input() headingText = "We have awesome app";
  @Input() descriptionText = "Labore et iusto odio dignissimos ducimus, qui dolorem ipsum, quia voluptas assumenda. Excepturi sint, obcaecati cupiditate non recusandae unde. Ab illo inventore veritatis et dolorum fuga temporibus. Magnam aliquam quaerat voluptatem sequi nesciunt, neque porro quisquam. Labore et dolorum fuga earum rerum facilis est eligendi optio cumque.";
  @Input() instructionText ="Download From:";

  @Input() customButtonText1;
  @Input() customButtonIcon1 = "fa-cart-plus";
  @Output() customEvent1 = new EventEmitter();

  @Input() customButtonText2;
  @Input() customButtonIcon2 = "fa-cart-plus";
  @Output() customEvent2 = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onCustom1(): void {
    this.customEvent1.emit();
  }

  onCustom2(): void {
    this.customEvent2.emit();
  }

}
