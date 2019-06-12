import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats7',
  templateUrl: './lick-app-widget-stats7.component.html',
  styles: []
})
export class LickAppWidgetStats7Component implements OnInit {

  @Input() data: LickAppWidgetStats7Data[] = [];
  @Input() iconClass = "fa fa-cog";
  @Input() headingText = "licky-lick-app-widget-stats7";
  @Input() subHeadingText = Math.floor(Math.random() * 1000);
  @Input() showMoreLink;
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
