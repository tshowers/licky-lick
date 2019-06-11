import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-parallax1',
  templateUrl: './lick-marketing-parallax1.component.html',
  styles: []
})
export class LickMarketingParallax1Component implements OnInit {

  @Input() headingText = "Download app for free";
  @Input() descriptionText = "Vero eos et dolorum fuga expedita distinctio. Cupiditate non provident, similique sunt in ea commodi autem. Aliquid ex ea voluptate velit esse, quam nihil molestiae consequatur, vel. Sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae.";
  @Input() imageURL = "http://via.placeholder.com/1920x1440";

  constructor() { }

  ngOnInit() {
  }

}
