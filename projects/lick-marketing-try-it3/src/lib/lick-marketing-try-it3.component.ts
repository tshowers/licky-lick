import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-try-it3',
  templateUrl: './lick-marketing-try-it3.component.html',
  styles: []
})
export class LickMarketingTryIt3Component implements OnInit {

  @Input() headingText = "Try it free for 14 day";
  @Input() descriptionText = "Quidem rerum necessitatibus saepe eveniet. Expedita distinctio quibusdam et harum quidem.";
  @Input() buttonLink = "/";
  @Input() buttonText = "Start Free Trial";
  @Input() imageURL = "http://via.placeholder.com/1920x400";

  constructor() { }

  ngOnInit() {
  }

}
