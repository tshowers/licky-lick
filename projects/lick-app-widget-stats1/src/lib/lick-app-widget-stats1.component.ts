import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats1',
  templateUrl: './lick-app-widget-stats1.component.html',
  styles: []
})
export class LickAppWidgetStats1Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats1";
  @Input() amount : number = Math.floor(Math.random() * 1000);
  @Input() amountText = "Income";
  @Input() iconClass = "fa fa-cogs";

  constructor() { }

  ngOnInit() {
  }

}
