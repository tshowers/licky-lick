import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-card-deck',
  templateUrl: './lick-app-widget-card-deck.component.html',
  styles: []
})
export class LickAppWidgetCardDeckComponent implements OnInit {
  @Input() headingText;
  @Input() data : any = [{
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 1",
    "name": "Sed sit varius auctor maecenas.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 1",
    "description": "Fringilla potenti vulputate cras orci quam eu montes sollicitudin cum dictum fringilla auctor ullamcorper nullam auctor elit senectus eu nisi.",
    "keywords": "Love, bite, trees",
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Bill Richards"
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 2",
    "name": "Suspendisse scelerisque vulputate velit.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 2",
    "description": "Taciti metus luctus elit vitae vehicula duis hac varius eget nisl justo dapibus lacinia montes aptent sollicitudin sed metus nulla?",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-bath",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Joyce Reynolds"
  },
  {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 3",
    "name": "Felis netus mauris magna sem.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 3",
    "description": "Blandit nibh velit condimentum viverra dictumst lectus hendrerit sed luctus non inceptos inceptos ultricies congue dolor tempor a curabitur euismod!",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Barbara McNamara"
  },
  {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 4",
    "name": "Felis netus mauris magna sem.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 4",
    "description": "Blandit nibh velit condimentum viverra dictumst lectus hendrerit sed luctus non inceptos inceptos ultricies congue dolor tempor a curabitur euismod!",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Jenson Cool"
  }
  ,
  {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 5",
    "name": "Felis netus mauris magna sem.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 5",
    "description": "Blandit nibh velit condimentum viverra dictumst lectus hendrerit sed luctus non inceptos inceptos ultricies congue dolor tempor a curabitur euismod!",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Ben Baker"
  },
  {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 1",
    "name": "Sed sit varius auctor maecenas.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 1",
    "description": "Fringilla potenti vulputate cras orci quam eu montes sollicitudin cum dictum fringilla auctor ullamcorper nullam auctor elit senectus eu nisi.",
    "keywords": "Love, bite, trees",
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Bill Richards"
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 2",
    "name": "Suspendisse scelerisque vulputate velit.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 2",
    "description": "Taciti metus luctus elit vitae vehicula duis hac varius eget nisl justo dapibus lacinia montes aptent sollicitudin sed metus nulla?",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-bath",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Joyce Reynolds"
  },
  {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 3",
    "name": "Felis netus mauris magna sem.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 3",
    "description": "Blandit nibh velit condimentum viverra dictumst lectus hendrerit sed luctus non inceptos inceptos ultricies congue dolor tempor a curabitur euismod!",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Barbara McNamara"
  },
  {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 4",
    "name": "Felis netus mauris magna sem.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 4",
    "description": "Blandit nibh velit condimentum viverra dictumst lectus hendrerit sed luctus non inceptos inceptos ultricies congue dolor tempor a curabitur euismod!",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Jenson Cool"
  }
  ,
  {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 5",
    "name": "Felis netus mauris magna sem.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 5",
    "description": "Blandit nibh velit condimentum viverra dictumst lectus hendrerit sed luctus non inceptos inceptos ultricies congue dolor tempor a curabitur euismod!",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": Math.floor(Math.random() * 1000),
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Ben Baker"
  }
];
  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(dataItem) : void {
    this.pageEvent.emit(dataItem);
  }


}
