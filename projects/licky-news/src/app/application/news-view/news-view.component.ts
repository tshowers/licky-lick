import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {

  menuItems: any[] = [
    {
      "link" : "/application/news",
      "name" : "News",
    },
    {
      "link" : "/application/news-selector",
      "name" : "News Selector"
    },
    {
      "link" : "/application/logout",
      "name" : "Log Out"
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
