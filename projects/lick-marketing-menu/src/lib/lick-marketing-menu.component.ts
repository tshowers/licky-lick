import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-menu',
  templateUrl: './lick-marketing-menu.component.html',
  styles: []
})
export class LickMarketingMenuComponent implements OnInit {

  @Input() logo = "https://via.placeholder.com/64";
  @Input() logoName = "Logo Name"

  @Input() menuItems: any[] = [
    {
      "link" : "/marketing/general-widgets",
      "name" : "Marketing",
    },
    {
      "link" : "/marketing/header-widgets",
      "name" : "Header"
    },
    {
      "link" : "/marketing/misc-widgets",
      "name" : "Miscellaneous"
    },
    {
      "link" : "/application/gernal-widgets",
      "name" : "App"
    },
    {
      "link" : "/application/stat-widgets",
      "name" : "Stats"
    },
    {
      "link" : "/application/news-widgets",
      "name" : "News"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
