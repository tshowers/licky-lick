import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-maintenance',
  templateUrl: './lick-app-widget-maintenance.component.html',
  styles: []
})
export class LickAppWidgetMaintenanceComponent implements OnInit {

  @Input() logoName = "LogoName";
  @Input() logoURL = "http://via.placeholder.com/100x100";
  @Input() homePageLink = "/";
  @Input() headingText = "Under Maintenance";
  @Input() subText = "PLEASE GIVE US A MOMENT TO SORT THINGS OUT";
  @Input() contactText = "Any Inquiries";
  @Input() contactLink = "/about/contact";
  @Input() contactLinkText = "Contact us";

  constructor() { }

  ngOnInit() {
  }

}
