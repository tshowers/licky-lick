import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-header1',
  templateUrl: './lick-marketing-header1.component.html',
  styles: []
})
export class LickMarketingHeader1Component implements OnInit {

  @Input() headingText = 'Present your awesome software';
  @Input() descriptionText = 'Delectus, ut perspiciatis, unde omnis voluptas nulla vero. Facilis est laborum et harum quidem rerum necessitatibus saepe. Magni dolores et molestiae consequatur, vel illum, qui.';
  @Input() button1Text = 'Sign Up';
  @Input() button1Link = "/";
  @Input() button2Text = 'Read More';
  @Input() button2Link = "/";
  @Input() imageSrc = 'http://via.placeholder.com/1400x980';
  @Input() featureBox1 = 'Maximum Protection';
  @Input() featureIcon1 = "icon-shield";
  @Input() badgeFeature1;
  @Input() featureBox2 = 'Unlimited Cloud Storage';
  @Input() featureIcon2 = "icon-cloud-upload";
  @Input() badgeFeature2;

  constructor() { }

  ngOnInit() {
  }

}
