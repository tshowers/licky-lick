import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-post3',
  templateUrl: './lick-app-widget-post3.component.html',
  styleUrls: ['./news-style.css']
})
export class LickAppWidgetPost3Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-post3";
  @Input() viewAllLink;
  @Input() viewAllText = "View All";
  @Input() isExternal = false;

  @Input() data: any[] = [
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/401x241.png",
      "keyword": { "name": "art", "link": "/art" },
      "name": "Follow These Smartphone Habits of Successful Entrepreneurs",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Ken Jensen",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('January 17, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/401x241.png",
      "keyword": { "name": "music", "link": "/art" },
      "name": "3 Things You Can Do to Get Your Customers Talking About Your Business",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Mark Johnson",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('February 17, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/401x241.png",
      "keyword": { "name": "lifestyle", "link": "/art" },
      "name": "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Karen Boyce",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('April 17, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/401x241.png",
      "keyword": { "name": "politics", "link": "/art" },
      "name": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Betty Kaplan",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('May 17, 2019 10:30:00'),
      "timeStamp": new Date()
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
