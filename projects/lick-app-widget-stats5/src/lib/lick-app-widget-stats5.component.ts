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
    "count": Math.floor(Math.random() * 1000),
    "label": "developers"
  }, {
    "count": Math.floor(Math.random() * 1000),
    "label": "managers"
  }];
  @Input() barData : LickAppWidgetStats5BarData[] = [{
    "count": Math.floor(Math.random() * 100),
    "label": "alpha"
  }, {
    "count": Math.floor(Math.random() * 100),
    "label": "beta"
  }, {
    "count": Math.floor(Math.random() * 100),
    "label": "prod"
  }, {
    "count": Math.floor(Math.random() * 100),
    "label": "arhive"
  }];

  @Input() showMoreLink = "/";
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
  }

  showMore() : void {
    console.log("Show More Clicked")
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
