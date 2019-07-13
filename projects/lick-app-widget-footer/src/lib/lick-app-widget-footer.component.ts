import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-footer',
  templateUrl: './lick-app-widget-footer.component.html',
  styles: []
})
export class LickAppWidgetFooterComponent implements OnInit {

  @Input() copyrightText = "ⓒ Copyright Taliferro. Taliferro Ⓡ Is Registered In The U.S. Patent And Trademark Office.";
  @Input() buttonLink = "https://www.taliferro.com";
  @Input() buttonText = "About Taliferro.";

  constructor() { }

  ngOnInit() {
  }

}
