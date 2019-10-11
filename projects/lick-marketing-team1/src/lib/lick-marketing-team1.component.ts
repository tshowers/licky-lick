import { Component, OnInit, Input } from '@angular/core';
import { User } from 'lick-data';

@Component({
  selector: 'licky-lick-marketing-team1',
  templateUrl: './lick-marketing-team1.component.html',
  styles: []
})
export class LickMarketingTeam1Component implements OnInit {

  @Input() headingText = "licky-lick-marketing-team1";
  @Input() descriptionText = "Saepe eveniet, ut perspiciatis, unde omnis iste natus sit voluptatem sequi. Deleniti atque corrupti, quos dolores. Accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore.";

  @Input() users: User[] = [
    {
      "status": "Active",
      "account" : "null",
      "email": "beth.Jordan@mymail.com",
      "name": "Beth Jordan",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1400x1400.png",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://via.placeholder.com/1400x1400.png",
      "contact": { "name": "Beth Jordan", "profession": "Developer", "shared": true, "firstName": "Beth", "lastName": "Jordan" }

    },
    {
      "status": "Active",
      "account" : "null",
      "email": "mindy.kittle@mymail.com",
      "name": "Mindy Kittle",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1400x1400.png",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://via.placeholder.com/1400x1400.png",
      "contact": { "name": "Mindy Kittle", "profession": "Marketing Specialist", "shared": true, "firstName": "Mindy", "lastName": "Kittle" }
    },
    {
      "status": "Active",
      "account" : "null",
      "email": "todd.booker@mymail.com",
      "name": "Todd Booker",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1400x1400.png",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://via.placeholder.com/1400x1400.png",
      "contact": { "name": "Todd Booker", "profession": "Developer", "shared": true, "firstName": "Todd", "lastName": "Booker" }
    },
    {
      "status": "Active",
      "account" : "null",
      "email": "kathy.avery@mymail.com",
      "name": "Kathy Avery",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://via.placeholder.com/1400x1400.png",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://via.placeholder.com/1400x1400.png",
      "contact": { "name": "Kathy Avery", "profession": "Quality Assurance", "shared": true, "firstName": "Kathy", "lastName": "Avery" }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
