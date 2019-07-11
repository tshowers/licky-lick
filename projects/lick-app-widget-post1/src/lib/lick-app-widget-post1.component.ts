import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-post1',
  templateUrl: './lick-app-widget-post1.component.html',
  styleUrls: ['./news-style.css']
})
export class LickAppWidgetPost1Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-post1";
  @Input() isExternal = false;


  @Input() data: any[] = [
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "http://www.usatoday.com",
      "url": "https://via.placeholder.com/303x182.png",
      "urlToImage" : "https://via.placeholder.com/303x182.png",
      "content" : "Blah, blah, blah",
      "keywords": { "name": "art", "link": "/art" },
      "title": "3 Founders With Booming Businesses Share Stories About Their Difficult Early",
      "name": "3 Founders With Booming Businesses Share Stories About Their Difficult Early",
      "author": "Ken Jensen",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('January 17, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "http://www.usatoday.com",
      "url": "https://via.placeholder.com/303x182.png",
      "urlToImage" : "https://via.placeholder.com/303x182.png",
      "content" : "Blah, blah, blah",
      "keywords": { "name": "art", "link": "/art" },
      "title": "3 Things You Can Do to Get Your Customers Talking About Your Business",
      "name": "3 Things You Can Do to Get Your Customers Talking About Your Business",
      "author": "Don Lemon",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('March 18, 2019 10:30:00'),
      "timeStamp": new Date()
    },
    {
      "id": Math.floor(Math.random() * 1000),
      "isExternal": true,
      "link": "http://www.usatoday.com",
      "url": "https://via.placeholder.com/303x182.png",
      "urlToImage" : "https://via.placeholder.com/303x182.png",
      "content" : "Blah, blah, blah",
      "keywords": { "name": "art", "link": "/art" },
      "title": "These Are the 20 Best Places to Work in 2018",
      "name": "These Are the 20 Best Places to Work in 2018",
      "author": "Peggi Lacy",
      "source": { "id": "23", "name": "USA Today" },
      "publishedAt": new Date('April 27, 2019 10:30:00'),
      "timeStamp": new Date()
    }
  ];
  @Input() featuredData = {
    "id": Math.floor(Math.random() * 1000),
    "isExternal": true,
    "link": "http://www.usatoday.com",
    "url": "https://via.placeholder.com/604x356.png",
    "urlToImage" : "https://via.placeholder.com/303x182.png",
    "content" : "Blah, blah, blah",
    "keywords": { "name": "art", "link": "/art" },
    "title": "licky-lick-app-widget-post1",
    "name": "licky-lick-app-widget-post1",
    "author": "Benji Ahmad",
    "source": { "id": "23", "name": "USA Today" },
    "publishedAt": new Date('December 17, 2019 10:30:00'),
    "timeStamp": new Date()
  };

  @Output() pageEvent = new EventEmitter();

  onPageEvent(article: any) : void {
    this.pageEvent.emit({article});
  }


  constructor() { }

  ngOnInit() {
  }

}
