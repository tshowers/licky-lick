import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-video1',
  templateUrl: './lick-marketing-video1.component.html',
  styles: []
})
export class LickMarketingVideo1Component implements OnInit {

  @Input() headingText = "licky-lick-marketing-video1";
  @Input() descriptionText = "Quo voluptas assumenda est, qui blanditiis praesentium voluptatum explicabo rem aperiam deleniti atque. Esse, quam nihil molestiae non numquam eius modi tempora incidunt.";
  @Input() videoURL = "https://www.youtube.com/watch?v=YfpJ4KPbeIA";
  @Input() imageURL = "http://via.placeholder.com/1450x816";

  constructor() { }

  ngOnInit() {
  }

}
