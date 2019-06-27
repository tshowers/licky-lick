import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-logout',
  templateUrl: './lick-app-widget-logout.component.html',
  styles: []
})
export class LickAppWidgetLogoutComponent implements OnInit {

  @Input() logoName = "LogoName";
  @Input() logoURL = "http://via.placeholder.com/100x100";
  @Input() homePageLink = "/";
  @Input() headingText = "You are logged out";


  constructor() { }

  ngOnInit() {
  }

}
