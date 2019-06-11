import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-try-it1',
  templateUrl: './lick-marketing-try-it1.component.html',
  styles: []
})
export class LickMarketingTryIt1Component implements OnInit {

  @Input() headingText = "Try it free for 14 day";
  @Input() buttonLink = "/";
  @Input() buttonText = "Start Free Trial";

  constructor() { }

  ngOnInit() {
  }

}
