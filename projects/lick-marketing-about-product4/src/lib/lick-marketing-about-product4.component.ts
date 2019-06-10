import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-about-product4',
  templateUrl: './lick-marketing-about-product4.component.html',
  styles: []
})
export class LickMarketingAboutProduct4Component implements OnInit {

  @Input() headingText = "Unlimited Service Capabilities";
  @Input() descriptionText = "Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut perspiciatis unde. Nemo enim ipsam voluptatem, quia voluptas nulla vero eos. Alias consequatur aut perferendis doloribus asperiores repellat.";
  @Input() buttonText = "Read More";
  @Input() buttonLink = "/";
  @Input() iconFeature1 = "icon-layers";
  @Input() iconFeature2 = "icon-speedometer";
  @Input() iconFeature3 = "icon-equalizer";
  @Input() iconFeature4 = "icon-cloud-upload";
  @Input() featureText1 = "User-friendly Interface";
  @Input() featureText2 = "High Download Speed";
  @Input() featureText3 = "Full UI Customization";
  @Input() featureText4 = "Unlimited Cloud Storage";

  @Input() featureBadgeText3;
  @Input() featureBadgeText4;


  constructor() { }

  ngOnInit() {
  }

}
