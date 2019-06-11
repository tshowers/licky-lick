import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'lick-data';

@Component({
  selector: 'licky-lick-marketing-reviews2',
  templateUrl: './lick-marketing-reviews2.component.html',
  styles: []
})
export class LickMarketingReviews2Component implements OnInit {

  @Input() headingText = 'licky-lick-marketing-reviews2';
  @Input() descriptionText = 'Earum rerum necessitatibus saepe eveniet, ut labore. Dicta sunt, explicabo laborum et harum quidem rerum hic tenetur. Itaque earum rerum hic tenetur a sapiente delectus, ut et.';
  @Input() reviews: Review[] = [
    {
      "$key": Math.floor(Math.random() * 1000).toString(),
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, false],
      "description": "Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue.",
      "userName": "Miles Jeffries",
      "profession": "Photographer",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "https://via.placeholder.com/1024x768.png",
      "shared": true,
      "name": "Miles Jeffries",
      "userImage": "https://via.placeholder.com/1024x768.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "Miles Studio" }
    },
    {
      "$key": Math.floor(Math.random() * 1000).toString(),
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, true],
      "description": "Proin sodales libero eget ante. Nulla quam.",
      "userName": "Janet Buckner",
      "profession": "CEO",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "https://via.placeholder.com/1024x768.png",
      "shared": true,
      "name": "Janet Buckner",
      "userImage": "https://via.placeholder.com/1024x768.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "Valid Software" }
    },
    {
      "$key": Math.floor(Math.random() * 1000).toString(),
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, false],
      "description": "Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. ",
      "userName": "Phyllis Kim",
      "profession": "Business Owner",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "https://via.placeholder.com/1024x768.png",
      "shared": true,
      "name": "Phyllis Kim",
      "userImage": "https://via.placeholder.com/1024x768.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "The Cake Place" }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
