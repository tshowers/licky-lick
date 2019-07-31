import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory-page',
  templateUrl: './factory-page.component.html',
  styleUrls: ['./factory-page.component.css']
})
export class FactoryPageComponent implements OnInit {

  exploreLink = "https://lick-test.firebaseapp.com/marketing/general-widgets";

  constructor() { }

  ngOnInit() {
  }

  public onPageEvent(value): void {
    window.open(value, '_blank');
  }

}
