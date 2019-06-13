import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats2',
  templateUrl: './lick-app-widget-stats2.component.html',
  styles: []
})
export class LickAppWidgetStats2Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats2";
  @Input() subHeadingText = "Sub Header";
  @Input() showMoreLink = "/";

  @Input() iconClass = "fa fa-trophy";

  @Input() data: any[] = [
    {
      "name": "Laptops",
      "amount": Math.floor(Math.random() * 1000),
      "measure": "units",
      "url": "https://via.placeholder.com/64x64.png"
    },
    {
      "name": "Desktops",
      "amount": Math.floor(Math.random() * 1000),
      "measure": "units",
      "url": "https://via.placeholder.com/64x64.png"
    },
    {
      "name": "APIs",
      "amount": Math.floor(Math.random() * 1000),
      "measure": "units",
      "url": "https://via.placeholder.com/64x64.png"
    },
    {
      "name": "Routers",
      "amount": Math.floor(Math.random() * 1000),
      "measure": "units",
      "url": "https://via.placeholder.com/64x64.png"
    },
  ];
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
  }

  showMore(): void {
    this.router.navigate([this.showMoreLink]);
  }

}
