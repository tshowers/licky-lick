import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-about-product6',
  templateUrl: './lick-marketing-about-product6.component.html',
  styles: []
})
export class LickMarketingAboutProduct6Component implements OnInit {

  @Input() headingText = "Full UI Customization";
  @Input() descriptionText = "Ducimus, qui dolorem ipsum, quia consequuntur magni. Autem vel illum, qui ratione voluptatem sequi. Eius modi tempora incidunt, ut enim ipsam voluptatem. Quas molestias excepturi sint, obcaecati cupiditate.";
  @Input() buttonLink;
  @Input() buttonText = "Read More";
  @Input() imageURL = "http://via.placeholder.com/1010x710";
  @Input() badgeText;
  @Input() featureText = "User-friendly Interface";
  @Input() iconFeature = "icon-layers";

  constructor() { }

  ngOnInit() {
  }

}
