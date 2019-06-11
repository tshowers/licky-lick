import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-try-it2',
  templateUrl: './lick-marketing-try-it2.component.html',
  styles: []
})
export class LickMarketingTryIt2Component implements OnInit {

  @Input() headingText = "Try it free for 14 day";
  @Input() descriptionText = "Quidem rerum necessitatibus saepe eveniet. Expedita distinctio quibusdam et harum quidem.";
  @Input() buttonLink = "/";
  @Input() buttonText = "Start Free Trial";

  constructor() { }

  ngOnInit() {
  }

}
