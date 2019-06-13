import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'licky-lick-app-widget-table-data',
  templateUrl: './lick-app-widget-table-data.component.html',
  styles: []
})
export class LickAppWidgetTableDataComponent implements OnInit {

  @Input() data: any[] = [{
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 1",
    "name": "Sed sit varius auctor maecenas.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 1",
    "description": "Fringilla potenti vulputate cras orci quam eu montes sollicitudin cum dictum fringilla auctor ullamcorper nullam auctor elit senectus eu nisi.",
    "keywords": "Love, bite, trees",
    "lastUpdated": new Date(),
    "badge": 12,
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
    "badge": 5,
    "icon": "fa fa-bath",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Joyce Reynolds"
  }, {
    "id": Math.floor(Math.random() * 1000).toString(),
    "title": "Title 3",
    "name": "Felis netus mauris magna sem.",
    "url": "https://via.placeholder.com/1024x768",
    "link": "/",
    "articleText": "Article text 3",
    "description": "Blandit nibh velit condimentum viverra dictumst lectus hendrerit sed luctus non inceptos inceptos ultricies congue dolor tempor a curabitur euismod!",
    "keywords": null,
    "lastUpdated": new Date(),
    "badge": 6,
    "icon": "fa fa-newspaper-o",
    "creatorName": "System",
    "timeStamp": new Date(),
    "userName": "Barbara McNamara"
  }];

  @Input() headingText = "licky-lick-app-widget-table-data";
  @Input() contextPath = '';
  @Input() dataContext;
  @Input() router: Router;
  @Input() path: string;
  @Input() dataRoute;
  @Input() viewable: boolean = true;
  @Input() editable: boolean = true;
  @Input() canCreate: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onDetail(id: string) {
    this.router.navigate([this.contextPath + this.path + id], { queryParamsHandling: 'preserve' });
  }

  onEdit(id: string) {
    this.router.navigate([this.contextPath + this.path + id + '/edit'], { queryParamsHandling: 'preserve' });
  }

  onDelete(item) {
    console.log("Delete clicked");
  }


}
