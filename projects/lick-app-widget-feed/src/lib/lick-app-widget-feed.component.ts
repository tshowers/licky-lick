import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-feed',
  templateUrl: './lick-app-widget-feed.component.html',
  styles: []
})
export class LickAppWidgetFeedComponent implements OnInit {

  @Input() headingText = "Feed";
  @Input() buttonText = "Submit";
  @Input() iconClass = "fa fa-comments-o";

  @Input() messages : Message[] = [];
  @Input() activeUsers;
  @Input() defaultImage : string = "https://via.placeholder.com/64x64";


  constructor() { }

  ngOnInit() {
  }

}
