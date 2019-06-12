import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats3',
  templateUrl: './lick-app-widget-stats3.component.html',
  styles: []
})
export class LickAppWidgetStats3Component implements OnInit {

  @Input() data: LickAppWidgetStats3Data[] = [];

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
