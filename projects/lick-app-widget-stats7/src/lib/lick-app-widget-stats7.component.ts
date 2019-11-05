import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats7',
  templateUrl: './lick-app-widget-stats7.component.html',
  styles: []
})
export class LickAppWidgetStats7Component implements OnInit {

  @Input() data: any[] = [{
    "label": "alpha",
    "value": 48
  }, {
    "label": "beta",
    "value": 32
  }, {
    "label": "production",
    "value": 29,
    "measure": "%"
  }, {
    "label": "archive",
    "value": 300
  }];
  @Input() iconClass = "fa fa-cog";
  @Input() headingText = "licky-lick-app-widget-stats7";
  @Input() subHeadingText = Math.floor(Math.random() * 1000);
  @Input() showMoreLink = "/";
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
  }

  showMore(): void {
    this.router.navigate([this.showMoreLink])
  }


}

export interface LickAppWidgetStats7Data {
  label: string,
  value: number,
  measure?: string
}
