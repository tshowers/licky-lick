import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-video2',
  templateUrl: './lick-marketing-video2.component.html',
  styles: []
})
export class LickMarketingVideo2Component implements OnInit {

  @Input() headingText = "licky-lick-marketing-video2";
  @Input() descriptionText = "Quo voluptas assumenda est, qui blanditiis praesentium voluptatum explicabo rem aperiam deleniti atque. Esse, quam nihil molestiae non numquam eius modi tempora incidunt."
  @Input() videoURL = "https://www.youtube.com/watch?v=m2tQVmOGu3M";
  @Input() imageURL = "http://via.placeholder.com/1450x816";

  constructor() { }

  ngOnInit() {
  }

}
