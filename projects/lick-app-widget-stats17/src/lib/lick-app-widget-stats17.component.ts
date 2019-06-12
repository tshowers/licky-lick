import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-stats17',
  templateUrl: './lick-app-widget-stats17.component.html',
  styles: []
})
export class LickAppWidgetStats17Component implements OnInit {

  @Input() event: Event;
  @Input() headingText = "licky-lick-app-widget-stats17";

  constructor() { }

  ngOnInit() {
    console.log(this.event);
    console.log(this.event.attendees);
  }

}
