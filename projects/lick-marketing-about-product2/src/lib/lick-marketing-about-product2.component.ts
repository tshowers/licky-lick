import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-about-product2',
  templateUrl: './lick-marketing-about-product2.component.html',
  styles: []
})
export class LickMarketingAboutProduct2Component implements OnInit {

  @Input() imageURL1 = "http://via.placeholder.com/600x1220";
  @Input() imageURL2 = "http://via.placeholder.com/672x350";
  @Input() headingText = "Detailed Statistics";
  @Input() descriptionText = "Libero tempore, cum soluta nobis est laborum et molestiae non numquam eius. Magni dolores eos, qui ratione. Accusamus et quas molestias excepturi. Nulla vero eos et quas molestias excepturi sint, obcaecati cupiditate. Nobis est eligendi optio, cumque nihil impedit voluptate velit esse.";
  @Input() bulletText1 = "User-friendly Interface";
  @Input() bulletText2 = "High Download Speed";
  @Input() bulletText3 = "Unlimited Cloud Storage";
  @Input() buttonText = "Read More";
  @Input() buttonLink = "/";


  constructor() { }

  ngOnInit() {
  }

}
