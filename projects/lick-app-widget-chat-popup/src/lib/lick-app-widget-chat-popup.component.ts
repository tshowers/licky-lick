import { Component, OnInit, Input } from '@angular/core';
import { Message, User } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-chat-popup',
  templateUrl: './lick-app-widget-chat-popup.component.html',
  styles: []
})
export class LickAppWidgetChatPopupComponent implements OnInit {

  @Input() headingText = "Chat";
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

  @Input() currentUser: User = {
    "id": "1002",
    "name": "John Hammon",
    "shared": false,
    "account": "3983498",
    "lastUpdated": new Date(),
    "timeStamp": new Date(),
    "user_id": Math.floor(Math.random() * 1000).toString(),
    "userName": "Bill Moyer",
    "publishedAt": new Date()
  };

  @Input() activeUsers;

  @Input() defaultImage: string = "https://via.placeholder.com/64x64.png"

  chatDisplay = "none";

  constructor() { }

  ngOnInit() {
  }

  openChat() : void {
      this.chatDisplay = (this.chatDisplay == "none") ? "" : "none";
  }


}
