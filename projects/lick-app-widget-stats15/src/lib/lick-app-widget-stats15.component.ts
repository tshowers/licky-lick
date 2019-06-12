import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats15',
  templateUrl: './lick-app-widget-stats15.component.html',
  styles: []
})
export class LickAppWidgetStats15Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats15";
  @Input() total: number = Math.floor(Math.random() * 1000);
  @Input() newItemLink: string = "/";
  @Input() newItemText = "New Item";

  @Input() iconClass1 = "fa fa-check-square-o";
  @Input() count1 = Math.floor(Math.random() * 1000);
  @Input() countText1 = "Published";

  @Input() iconClass2 = "fa fa-circle-o-notch";
  @Input() count2 = Math.floor(Math.random() * 1000);
  @Input() countText2 = "Completed";

  @Input() iconClass3 = "fa fa-pie-chart";
  @Input() count3 = Math.floor(Math.random() * 1000);
  @Input() countText3 = "Successfull";

  @Input() iconClass4 = "fa fa-sitemap";
  @Input() count4 = Math.floor(Math.random() * 1000);
  @Input() countText4 = "Ongoing";
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
  }

  newItem(): void {
    this.router.navigate([this.newItemLink]);
  }

}
