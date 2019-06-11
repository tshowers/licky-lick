import { Component, OnInit, Input } from '@angular/core';
import { User } from 'lick-data';

@Component({
  selector: 'licky-lick-marketing-team3',
  templateUrl: './lick-marketing-team3.component.html',
  styles: []
})
export class LickMarketingTeam3Component implements OnInit {

  @Input() headingText = "licky-lick-marketing-team3";
  @Input() descriptionText = "Saepe eveniet, ut perspiciatis, unde omnis iste natus sit voluptatem sequi. Deleniti atque corrupti, quos dolores. Accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore.";
  @Input() users: User[] = [
    {
      "$key": Math.floor(Math.random() * 1000).toString(),
      "status": "Active",
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
      "$key": Math.floor(Math.random() * 1000).toString(),
      "status": "Active",
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
      "$key": Math.floor(Math.random() * 1000).toString(),
      "status": "Active",
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
      "$key": Math.floor(Math.random() * 1000).toString(),
      "status": "Active",
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
