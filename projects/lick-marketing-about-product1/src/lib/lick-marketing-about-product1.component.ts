import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-about-product1',
  templateUrl: './lick-marketing-about-product1.component.html',
  styles: []
})
export class LickMarketingAboutProduct1Component implements OnInit {

  @Input() headerText = 'Unlimited Service Capabilities';
  @Input() descriptionText = "Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut perspiciatis unde. Nemo enim ipsam voluptatem, quia voluptas nulla vero eos. Alias consequatur aut perferendis doloribus asperiores repellat.";
  @Input() buttonText = 'Read More';
  @Input() buttonLink = "/";
  @Input() featureBlockText1 = 'User-friendly Interface';
  @Input() featureBlockIcon1 = 'icon-layers';

  @Input() featureBlockText2 = 'High Download Speed';
  @Input() featureBlockIcon2 = 'icon-speedometer';

  @Input() featureBlockText3 = 'Full UI Customization';
  @Input() featureBlockIcon3 = 'icon-equalizer';
  @Input() featureBlockBadgeText3;

  @Input() featureBlockText4 = 'Unlimited Cloud Storage';
  @Input() featureBlockIcon4 = 'icon-cloud-upload';
  @Input() featureBlockBadgeText4;


  constructor() { }

  ngOnInit() {
  }

}
