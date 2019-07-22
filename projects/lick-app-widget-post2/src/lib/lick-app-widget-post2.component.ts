import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-post2',
  templateUrl: './lick-app-widget-post2.component.html',
  styleUrls: ['./news-style.css']
})
export class LickAppWidgetPost2Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-post2";
  @Input() defaultImage = "assets/images/noPhoto.jpg";

  @Input() categories = [
    { "name": "All" },
    { "name": "World" },
    { "name": "Lifestyle" },
    { "name": "Business" },
    { "name": "Fashion" }
  ];

  tab1 = '';
  tab2 = 'none';
  tab3 = 'none';
  tab4 = 'none';
  tab5 = 'none';
  tab6 = 'none';
  tab7 = 'none';

  @Input() tabData1: any[] = [
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
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
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
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
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
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
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "politics", "link": "/art" },
      "name": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Betty Kaplan",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('May 17, 2019 10:30:00'),
      "timeStamp": new Date()
    },
  ];
  @Input() tabData2: any[] = [
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "world", "link": "/art" },
      "name": "Follow These Smartphone Habits of Successful Entrepreneurs",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Pete Morris",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('June 17, 2018 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "url": "https://via.placeholder.com/386x270.png",
      "keyword": { "name": "fashion", "link": "/art" },
      "name": "3 Things You Can Do to Get Your Customers Talking About Your Business",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Joyce Burns",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('February 5, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "contacts", "link": "/art" },
      "name": "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Mindy Cotton",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('April 4, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "politics", "link": "/art" },
      "name": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Bethany Tyler",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('May 1, 2019 10:30:00'),
      "timeStamp": new Date()
    },

  ];
  @Input() tabData3: any[] = [
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "news", "link": "/art" },
      "name": "Follow These Smartphone Habits of Successful Entrepreneurs",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Mike Jennings",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('January 5, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "business", "link": "/art" },
      "name": "3 Things You Can Do to Get Your Customers Talking About Your Business",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Eddie Rana",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('February 10, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "biotech", "link": "/art" },
      "name": "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Lisa Schulze",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('April 10, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "science", "link": "/art" },
      "name": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Debra Davis",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('May 17, 2019 10:30:00'),
      "timeStamp": new Date()
    },

  ];
  @Input() tabData4: any[] = [
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "culture", "link": "/art" },
      "name": "Follow These Smartphone Habits of Successful Entrepreneurs",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Alysa Wells",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('January 23, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "music", "link": "/art" },
      "name": "3 Things You Can Do to Get Your Customers Talking About Your Business",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Phyllis Guy",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('February 25, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "url": "https://via.placeholder.com/386x270.png",
      "keyword": { "name": "commerce", "link": "/art" },
      "name": "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Margo Jackson",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('April 23, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "location", "link": "/art" },
      "name": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Peggy Marcellus",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('May 20, 2019 10:30:00'),
      "timeStamp": new Date()
    },

  ];
  @Input() tabData5: any[] = [
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "technology", "link": "/art" },
      "name": "Follow These Smartphone Habits of Successful Entrepreneurs",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Debbie Harrell",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('January 9, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "music", "link": "/art" },
      "name": "3 Things You Can Do to Get Your Customers Talking About Your Business",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Karen Brooks",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('February 5, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "technology", "link": "/art" },
      "name": "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Misty Carbo",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('April 20, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "/",
      "url": "https://via.placeholder.com/386x270.png",
      "urlToImage" : "https://via.placeholder.com/386x270.png",
      "content" : "Blah, blah, blah",
      "keyword": { "name": "technology", "link": "/art" },
      "name": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "description": "iPrice Group report offers insights on daily e-commerce activity in the ...",
      "author": "Denise Harper",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('May 8, 2019 10:30:00'),
      "timeStamp": new Date()
    },
  ];

  @Input() tabData6: any[];
  @Input() tabData7: any[];

  @Output() pageEvent = new EventEmitter();

  public activeTab: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(article: any) : void {
    this.pageEvent.emit({article});
  }

  showCategory(i): void {
    this.activeTab = i;
    this.tab1 = (i == 0) ? '' : 'none';
    this.tab2 = (i == 1) ? '' : 'none';
    this.tab3 = (i == 2) ? '' : 'none';
    this.tab4 = (i == 3) ? '' : 'none';
    this.tab5 = (i == 4) ? '' : 'none';
    this.tab6 = (i == 5) ? '' : 'none';
    this.tab7 = (i == 6) ? '' : 'none';
  }

}
