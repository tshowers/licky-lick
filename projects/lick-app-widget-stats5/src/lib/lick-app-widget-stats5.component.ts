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


  @Input() circleData : LickAppWidgetStats5CircleData[] = [];
  @Input() barData : LickAppWidgetStats5BarData[] = [];
  @Input() showMoreLink;
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
