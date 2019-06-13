import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-feed',
  templateUrl: './lick-app-widget-feed.component.html',
  styles: []
})
export class LickAppWidgetFeedComponent implements OnInit {

  @Input() headingText = "Feed";
  @Input() buttonText = "Submit";
  @Input() iconClass = "fa fa-comments-o";

  @Input() messages: Message[] = [{
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Modi ratione aliquid non. Et porro deserunt illum sed velit necessitatibus. ",
    "name": "John Hammond",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": "1002",
    "timeStamp": new Date(),
    "handle": "@JohnHammond",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
    "userImage": null

  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed",
    "name": "Bill Burr",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": Math.floor(Math.random() * 1000).toString(),
    "timeStamp": new Date(),
    "handle": "@BillBurr",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Id vel ducimus perferendis fuga excepturi nulla. Dolores dolores amet et laborum facilis. Officia magni ut non autem et qui incidunt.",
    "name": "Wayne Newton",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": Math.floor(Math.random() * 1000).toString(),
    "timeStamp": new Date(),
    "handle": "@WayneNewton",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "text": "Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed.",
    "name": "John Hammond",
    "replies": [],
    "favored": false,
    "bookmarked": false,
    "draft": true,
    "deleted": false,
    "icon": "https://via.placeholder.com/64x64.png",
    "user_id": "1002",
    "timeStamp": new Date(),
    "handle": "@JohnHammond",
    "status": "notification online",
    "shared": false,
    "article": null,
    "lastUpdated": new Date(),
  }];

  @Input() activeUsers;
  @Input() defaultImage: string = "https://via.placeholder.com/64x64";


  constructor() { }

  ngOnInit() {
  }

}
