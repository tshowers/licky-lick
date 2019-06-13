import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats5',
  templateUrl: './lick-app-widget-stats5.component.html',
  styles: []
})
export class LickAppWidgetStats5Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats5";
  @Input() subHeadingText = "Summery of Last (7 day)";


  @Input() circleData : LickAppWidgetStats5CircleData[] = [{
    "count": 250,
    "label": "developers"
  }, {
    "count": 89,
    "label": "managers"
  }];
  @Input() barData : LickAppWidgetStats5BarData[] = [{
    "count": 14,
    "label": "alpha"
  }, {
    "count": 75,
    "label": "beta"
  }, {
    "count": 83,
    "label": "prod"
  }, {
    "count": 6,
    "label": "arhive"
  }];

  @Input() showMoreLink = "/";
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
  }

}

export interface LickAppWidgetStats5CircleData {
  count: number;
  label: string;
}

export interface LickAppWidgetStats5BarData {
  count: number;
  label: string;
}
