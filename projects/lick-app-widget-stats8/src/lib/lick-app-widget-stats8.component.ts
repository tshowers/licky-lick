import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats8',
  templateUrl: './lick-app-widget-stats8.component.html',
  styles: []
})
export class LickAppWidgetStats8Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats8";
  @Input() totalCount : number = Math.floor(Math.random() * 1000);
  @Input() descriptionText = "Number of all Online Users Who have<br/>Logged into the Website at the moment";
  @Input() count1: number = Math.floor(Math.random() * 1000);
  @Input() count1Text: string = "Online";
  @Input() count2: number = Math.floor(Math.random() * 1000);
  @Input() count2Text: string = "Offline";
  @Input() count3: number = Math.floor(Math.random() * 1000);
  @Input() count3Text: string = "Pending";

  constructor() { }

  ngOnInit() {
  }

}
