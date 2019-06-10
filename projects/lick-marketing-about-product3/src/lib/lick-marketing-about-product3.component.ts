import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-about-product3',
  templateUrl: './lick-marketing-about-product3.component.html',
  styles: []
})
export class LickMarketingAboutProduct3Component implements OnInit {

  @Input() headingText = "Detailed Statistics";
  @Input() badgeText = "pro";
  @Input() descriptionText = "Commodi autem quibusdam et voluptates repudiandae sint et dolorum fuga numquam eius. Vel illum, qui ratione voluptatem. Ad minima veniam, quis nostrum. Culpa, qui dolorem ipsum, quia non numquam eius modi. Eligendi optio, cumque nihil magnam aliquam quaerat molestiae consequatur.";
  @Input() bulletText1 = "User-friendly Interface";
  @Input() bulletText2 = "High Download Speed";
  @Input() bulletText3 = "Unlimited Cloud Storage";
  @Input() buttonText = "Read More";
  @Input() buttonLink = "/";
  @Input() imageURL1 = "http://via.placeholder.com/600x1220";
  @Input() imageURL2 = "http://via.placeholder.com/672x427";


  constructor() { }

  ngOnInit() {
  }

}
