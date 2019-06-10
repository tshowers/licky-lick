import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-about-product5',
  templateUrl: './lick-marketing-about-product5.component.html',
  styles: []
})
export class LickMarketingAboutProduct5Component implements OnInit {

  @Input() imageURL = "http://via.placeholder.com/1010x710";
  @Input() badgeFeatureText;
  @Input() iconFeature = "icon-layers";
  @Input() featureText = "User-friendly Interface";
  @Input() headingText = "Full UI Customization";
  @Input() badgeText;
  @Input() descriptionText = "Ducimus, qui dolorem ipsum, quia consequuntur magni. Autem vel illum, qui ratione voluptatem sequi. Eius modi tempora incidunt, ut enim ipsam voluptatem. Quas molestias excepturi sint, obcaecati.";
  @Input() buttonText = "Read More";
  @Input() buttonLink = "/";


  constructor() { }

  ngOnInit() {
  }

}
