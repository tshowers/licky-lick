import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-list-order',
  templateUrl: './lick-app-widget-list-order.component.html',
  styles: []
})
export class LickAppWidgetListOrderComponent implements OnInit {

  @Input() orders : Order[] = [{
    "shippingRequired": false,
    "date": null,
    "amount": Math.floor(Math.random() * 1000),
    "tax": Math.floor(Math.random() * 1000),
    "orderLine": [],
    "invoices": [],
    "draft": true,
    "deleted": false,
    "id": Math.floor(Math.random() * 1000).toString(),
    "orderDate": new Date(),
    "status": "Processing",
    "shared" : false,
    "lastUpdated" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
    "name" : null
  }, {
    "shippingRequired": false,
    "date": null,
    "amount": Math.floor(Math.random() * 1000),
    "tax": Math.floor(Math.random() * 1000),
    "orderLine": [],
    "invoices": [],
    "draft": true,
    "deleted": false,
    "id": Math.floor(Math.random() * 1000).toString(),
    "orderDate":new Date(),
    "status": "Shipped",
    "shared" : false,
    "lastUpdated" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
    "name" : null
  }, {
    "shippingRequired": false,
    "date": null,
    "amount": Math.floor(Math.random() * 1000),
    "tax": Math.floor(Math.random() * 1000),
    "orderLine": [],
    "invoices": [],
    "draft": true,
    "deleted": false,
    "id": Math.floor(Math.random() * 1000).toString(),
    "orderDate": new Date(),
    "status": "Delivered",
    "shared" : false,
    "lastUpdated" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
    "name" : null
  }, {
    "shippingRequired": false,
    "date": null,
    "amount": Math.floor(Math.random() * 1000),
    "tax": Math.floor(Math.random() * 1000),
    "orderLine": [],
    "invoices": [],
    "draft": true,
    "deleted": false,
    "id": Math.floor(Math.random() * 1000).toString(),
    "orderDate": new Date(),
    "status": "Pending",
    "shared" : false,
    "lastUpdated" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
    "name" : null
  }];
  @Input() headingText = "licky-lick-app-widget-list-order";
  @Input() columnHeading1 = "Order #";
  @Input() columnHeading2 = "Order Time";
  @Input() columnHeading3 = "Amount (USD)";
  @Input() columnHeading4 = "Status";
  @Input() showMoreLink = "/";

  constructor() { }

  ngOnInit() {
  }

}
