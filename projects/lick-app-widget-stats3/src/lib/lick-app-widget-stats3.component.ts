import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats3',
  templateUrl: './lick-app-widget-stats3.component.html',
  styles: []
})
export class LickAppWidgetStats3Component implements OnInit {

  @Input() data: LickAppWidgetStats3Data[] = [{
    "count": 5,
    "label": "users",
    "iconClass": "fa fa-bath"
  }, {
    "count": 12,
    "label": "files",
    "iconClass": "fa fa-bath"
  }, {
    "count": 25,
    "label": "laptops",
    "iconClass": "fa fa-bath"
  }, {
    "count": 4,
    "label": "routers",
    "iconClass": "fa fa-bath"
  }, {
    "count": 16,
    "label": "vendors",
    "iconClass": "fa fa-bath"
  }, {
    "count": 23,
    "label": "executives",
    "iconClass": "fa fa-bath"
  }];

  @Input() iconClass = "fa fa-address-card";
  @Input() headingText = "licky-lick-app-widget-stats3";
  @Input() subHeadingText = "Details";

  constructor() { }

  ngOnInit() {
  }

}

export interface LickAppWidgetStats3Data {
  count: number;
  label: string;
  iconClass: string;
}
