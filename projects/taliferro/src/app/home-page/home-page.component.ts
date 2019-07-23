import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'lick-data';
import { FirebaseDataService} from 'licky-services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  menuItems: any[] = [
    {
      "link" : "/",
      "name" : "Home",
    },
  ];
  message = "We don't like spam either";

  users: User[] = [
    {
      "$key": Math.floor(Math.random() * 1000).toString(),
      "status": "Active",
      "email": "vikki.owens@taliferro.com",
      "name": "Vikki Owens",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider1.jpg?alt=media&token=27ae2753-beff-40f3-a47e-cb5bab47bd44",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider1.jpg?alt=media&token=27ae2753-beff-40f3-a47e-cb5bab47bd44",
      "contact": { "name": "Vikki Owens", "profession": "Co-founder and CEO", "shared": true, "firstName": "Vikki", "lastName": "Owens" }

    },
    {
      "$key": Math.floor(Math.random() * 1000).toString(),
      "status": "Active",
      "email": "ty.showers@taliferro.com",
      "name": "Tyrone Showers",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider2.jpg?alt=media&token=8487f9ca-ab68-4812-a9d2-bbea95399ca4",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fteam-slider2.jpg?alt=media&token=8487f9ca-ab68-4812-a9d2-bbea95399ca4",
      "contact": { "name": "Tyrone Showers", "profession": "Engineer", "shared": true, "firstName": "Tyrone", "lastName": "Showers" }
    },
    {
      "$key": Math.floor(Math.random() * 1000).toString(),
      "status": "Active",
      "email": "bradford.nims@taliferro.com",
      "name": "Bradford Nims",
      "helpNeeded": false,
      "openView": false,
      "lastUpdated": new Date(),
      "lastUpdatedBy": "System",
      "draft": false,
      "deleted": false,
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "url": "assets/images/default-user.png",
      "shared": false,
      "publishedAt": new Date(),
      "timeStamp": new Date(),
      "userName": "System",
      "userImage": "assets/images/default-user.png",
      "contact": { "name": "Bradford Nims", "profession": "Technical Writer", "shared": true, "firstName": "Bradford", "lastName": "Nims" }
    },
  ];

  description = "Vikki co-founded two IT startups and other business ventures, including a pop culture and arts ezine and a private wine tasting company. Her penchant for planning, coordinating, and executing is grounded in events and project management. She oversees Taliferro project initiatives and serves as an internal consultant on matters of agile and change management.";

  constructor(public router: Router, private _fds: FirebaseDataService) { }

  ngOnInit() {
  }

  public onPageEvent(value): void {
    this._fds.writeData('/inquiries', {
      firstName: value.firstName,
      lastName: value.lastName,
      emailAddress: value.emailAddress,
      message: value.message
    })
    this.message = "Thank you! We'll be in touch.";
  }
}
