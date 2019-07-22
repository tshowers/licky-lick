import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NewsArticle } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-post4',
  templateUrl: './lick-app-widget-post4.component.html',
  styleUrls: ['./news-style.css']
})
export class LickAppWidgetPost4Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-post4";
  @Input() defaultImage = "assets/images/noPhoto.jpg";


  @Input() boxes: any[] = [
    {
      "heading": "Heading1",
      "featuredArticle": {
        "id": Math.floor(Math.random() * 1000),
        "heading": "Technology",
        "url": "https://via.placeholder.com/282x298.png",
        "urlToImage": "https://via.placeholder.com/282x298.png",
        "content": "Blah, blah, blah",
        "name": "Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off",
        "title": "Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off",
        "author": "Ann Windom",
        "publishedAt": new Date(),
        "link": "/",
      },
      "subArticles": [
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "Need a Website for Your Business? Google Can Help",
          "title": "Need a Website for Your Business? Google Can Help",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        },
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "Here Are Ways You Can Earn From the Sharing Economy",
          "title": "Here Are Ways You Can Earn From the Sharing Economy",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        },
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "19 Crazy Facts You Probably Didn't Know About Google",
          "title": "19 Crazy Facts You Probably Didn't Know About Google",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        },
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "What Household Chores Would Filipinos Love to Assign to Robots?",
          "title": "What Household Chores Would Filipinos Love to Assign to Robots?",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        }
      ]
    },
    {
      "heading": "Heading2",
      "featuredArticle": {
        "id": Math.floor(Math.random() * 1000),
        "heading": "Travel",
        "url": "https://via.placeholder.com/282x298.png",
        "urlToImage": "https://via.placeholder.com/282x298.png",
        "content": "Blah, blah, blah",
        "name": "4 credit card tips to make business travel easier",
        "title": "4 credit card tips to make business travel easier",
        "author": "Ann Windom",
        "publishedAt": new Date(),
        "link": "/",
      },
      "subArticles": [
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "5 deadliest luxury vacation spots on Earth",
          "title": "5 deadliest luxury vacation spots on Earth",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        },
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "These 4 startups can send you to work and travel abroad",
          "title": "These 4 startups can send you to work and travel abroad",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        },
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "9 mind-blowing travel destinations for adventure seekers",
          "title": "9 mind-blowing travel destinations for adventure seekers",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        },
        {
          "id": Math.floor(Math.random() * 1000),
          "name": "These Small Business Ideas Are Great for Entrepreneurial Children",
          "title": "These Small Business Ideas Are Great for Entrepreneurial Children",
          "author": "Ann Windom",
          "publishedAt": new Date(),
          "link": "/",
        }
      ]
    },
  ]

  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(article: any) : void {
    this.pageEvent.emit({article});
  }

}

export class ProviderBox {
  heading: string;
  featuredArticle: NewsArticle;
  subArticles: NewsArticle[];
}
