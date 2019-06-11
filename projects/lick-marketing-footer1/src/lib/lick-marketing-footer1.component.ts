import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-footer1',
  templateUrl: './lick-marketing-footer1.component.html',
  styles: []
})
export class LickMarketingFooter1Component implements OnInit {

  @Input() headingText1 = "licky-lick-marketing-footer1";
  @Input() descriptionText = "Obcaecati cupiditate non recusandae error sit voluptatem accusantium doloremque laudantium. Cupiditate non recusandae aspernatur aut rerum. Veniam, quis nostrum exercitationem.";
  @Input() column1Heading = "Product";
  @Input() column1Text1 = "Features";
  @Input() column1Text2 = "Pricing";
  @Input() column1Text3 = "Download";
  @Input() column1Text4 = "Showcase";
  @Input() column1Text5 = "Integration";
  @Input() column1Button1Link = "/";
  @Input() column1Button2Link = "/";
  @Input() column1Button3Link = "/";
  @Input() column1Button4Link = "/";
  @Input() column1Button5Link = "/";

  @Input() column2Heading = "Support";
  @Input() column2Text1 = "Support Docs";
  @Input() column2Text2 = "Community";
  @Input() column2Text3 = "API Docs";
  @Input() column2Text4 = "Terms of Use";
  @Input() column2Text5 = "Privacy";
  @Input() column2Button1Link = "/";
  @Input() column2Button2Link = "/";
  @Input() column2Button3Link = "/";
  @Input() column2Button4Link = "/";
  @Input() column2Button5Link = "/";

  @Input() column3Heading = "Company";
  @Input() column3Text1 = "About";
  @Input() column3Text2 = "Blog";
  @Input() column3Text3 = "Jobs";
  @Input() column3Text4 = "Contacts";
  @Input() column3Button1Link = "/";
  @Input() column3Button2Link = "/";
  @Input() column3Button3Link = "/";
  @Input() column3Button4Link = "/";

  @Input() footerText = "All rights reserved.";

  constructor() { }

  ngOnInit() {
  }

}
