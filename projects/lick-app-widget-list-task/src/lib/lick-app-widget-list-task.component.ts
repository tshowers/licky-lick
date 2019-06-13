import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'lick-data';


@Component({
  selector: 'licky-lick-app-widget-list-task',
  templateUrl: './lick-app-widget-list-task.component.html',
  styles: []
})
export class LickAppWidgetListTaskComponent implements OnInit {

  @Input() tasks : Task[] = [{
    "id": Math.floor(Math.random() * 1000).toString(),
    "even": false,
    "assignedToName": "Patricia Morris",
    "isPastDate": false,
    "started": false,
    "draft": false,
    "deleted": false,
    "name": "Schedule Follow-up Meeting",
    "status": "Completed",
    "type": "fa fa-calendar",
    "shared" : false,
    "lastUpdated" : new Date(),
    "publishedAt" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "even": false,
    "assignedToName": "Bethany Franks",
    "isPastDate": false,
    "started": true,
    "draft": false,
    "deleted": false,
    "name": "Call Doctor",
    "status": "Past Due",
    "type": "fa fa-phone",
    "shared" : false,
    "lastUpdated" : new Date(),
    "publishedAt" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "even": false,
    "assignedToName": "Jenny Keel",
    "isPastDate": false,
    "started": false,
    "draft": false,
    "deleted": false,
    "name": "Complete Form O2",
    "status": null,
    "type": null,
    "shared" : false,
    "lastUpdated" : new Date(),
    "publishedAt" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "even": false,
    "assignedToName": "Susan Ross",
    "isPastDate": false,
    "started": false,
    "draft": false,
    "deleted": false,
    "name": "Enter Time",
    "status": "In Progress",
    "type": null,
    "shared" : false,
    "lastUpdated" : new Date(),
    "publishedAt" : new Date(),
    "timeStamp" : new Date(),
    "user_id" : Math.floor(Math.random() * 1000).toString(),
    "userName" : "System",
  }];
  @Input() headingText = "licky-lick-app-widget-list-task";
  @Input() taskCount = Math.floor(Math.random() * 1000);

  constructor() { }

  ngOnInit() {
  }

}
