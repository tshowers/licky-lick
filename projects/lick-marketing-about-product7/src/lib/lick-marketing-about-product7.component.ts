import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
