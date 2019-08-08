import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  images = [
    {src : "assets/images/img1.jpg", caption: "Task Assistant", thumb: "assets/images/img1-sm.jpg"},
    {src : "assets/images/img2.jpg", caption: "Home Dashboard", thumb: "assets/images/img2-sm.jpg"},
    {src : "assets/images/img3.jpg", caption: "Project View", thumb: "assets/images/img3-sm.jpg"},
    {src : "assets/images/img4.jpg", caption: "Opportunity Dashboard", thumb: "assets/images/img4-sm.jpg"},
  ];


  constructor() { }

  ngOnInit() {
  }

}
