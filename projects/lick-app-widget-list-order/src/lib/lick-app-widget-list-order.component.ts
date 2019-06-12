import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-list-order',
  templateUrl: './lick-app-widget-list-order.component.html',
  styles: []
})
export class LickAppWidgetListOrderComponent implements OnInit {

  @Input() orders : Order[] = [];
  @Input() headingText = "Order List";
  @Input() columnHeading1 = "Order #";
  @Input() columnHeading2 = "Order Time";
  @Input() columnHeading3 = "Amount (USD)";
  @Input() columnHeading4 = "Status";
  @Input() showMoreLink;

  constructor() { }

  ngOnInit() {
  }

}
