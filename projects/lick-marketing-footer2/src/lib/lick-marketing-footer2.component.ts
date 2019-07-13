import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-marketing-footer2',
  templateUrl: './lick-marketing-footer2.component.html',
  styles: []
})
export class LickMarketingFooter2Component implements OnInit {

  @Input() buttonText1 = "Home";
  @Input() buttonText2 = "Blog";
  @Input() buttonText3 = "Post";
  @Input() buttonText4 = "Contact";

  @Input() buttonLink1 = "/";
  @Input() buttonLink2 = "/";
  @Input() buttonLink3 = "/";
  @Input() buttonLink4 = "/";

  @Input() socialText1 = "Facebook";
  @Input() socialText2 = "Twitter";
  @Input() socialText3 = "Instagram";
  @Input() socialText4 = "GitHub";
  @Input() socialText5 = "Linkedin";

  @Input() socialLink1 = "/";
  @Input() socialLink2 = "/";
  @Input() socialLink3 = "/";
  @Input() socialLink4 = "/";
  @Input() socialLink5 = "/";

  @Input() socialIcon1 = "fa-facebook";
  @Input() socialIcon2 = "fa-twitter";
  @Input() socialIcon3 = "fa-instagram";
  @Input() socialIcon4 = "fa-github";
  @Input() socialIcon5 = "fa-linkedin";

  @Input() router: Router;

  @Input() copyrightText = "ⓒ Copyright Taliferro. Taliferro Ⓡ Is Registered In The U.S. Patent And Trademark Office.";

  constructor() { }

  ngOnInit() {
  }

  onNavClick(link: string): void {
    if (link.indexOf('http') >= 0)
      window.open(link, '_blank');
    else
      this.router.navigate([link]);
  }



}
