import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-stats17',
  templateUrl: './lick-app-widget-stats17.component.html',
  styles: []
})
export class LickAppWidgetStats17Component implements OnInit {

  @Input() event: Event = {
    "contacts": [],
    "attendees": [{
      "name": "Peter Drucker",
      "url": "https://via.placeholder.com/64x64.png"
    }, {
      "name": "Mary Wilson",
      "url": "https://via.placeholder.com/64x64.png"
    }, {
      "name": "Adrian Barns",
      "url": "https://via.placeholder.com/64x64.png"
    }, {
      "name": "Leslie Thompson",
      "url": "https://via.placeholder.com/64x64.png"
    }, {
      "name": "Jen Dyer",
      "url": "https://via.placeholder.com/64x64.png"
    }],
    "requiredStaffing": Math.floor(Math.random() * 10),
    "confirmed": false,
    "availableSpaces": Math.floor(Math.random() * 100),
    "costPerPerson": Math.floor(Math.random() * 100),
    "draft": true,
    "deleted": false,
    "startDate": new Date(),
    "endDate": new Date(),
    "startTime": "10:00am",
    "title": "Board Meeting",
    "description": "Discuss upcoming fundraiser",
    "location": "3892 Love Drive",
    "name": "Board Meeting",
    "shared": true,
    "publishedAt": new Date(),
    "lastUpdated": new Date(),
    "timeStamp": new Date(),
    "user_id": Math.floor(Math.random() * 1000).toString(),
    "userName": "System"
  };

  @Input() headingText = "licky-lick-app-widget-stats17";

  constructor() { }

  ngOnInit() {
    console.log(this.event);
    console.log(this.event.attendees);
  }

}
