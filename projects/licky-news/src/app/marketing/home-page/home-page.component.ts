import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  images = [
    {src : "assets/images/News1-lg.png", caption: "News Selector", thumb: "assets/images/News1-sm.jpg"},
    {src : "assets/images/News2-lg.png", caption: "News You Select", thumb: "assets/images/News2-sm.jpg"},
    {src : "assets/images/News3-lg.png", caption: "Latest News", thumb: "assets/images/News3-sm.jpg"},
    {src : "assets/images/News4-lg.png", caption: "Top News By Category", thumb: "assets/images/News4-sm.jpg"},
    {src : "assets/images/News5-lg.png", caption: "Headlines", thumb: "assets/images/News5-sm.jpg"},
  ];

  constructor(public router: Router) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
