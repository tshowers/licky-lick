import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'lick-data';


@Component({
  selector: 'licky-lick-app-widget-messages',
  templateUrl: './lick-app-widget-messages.component.html',
  styles: []
})
export class LickAppWidgetMessagesComponent implements OnInit {

  @Input() headingText = "Messages";
  @Input() iconClass = "fa fa-comments-o";

  @Input() messages: Message[] = [];
  @Input() messageCount;

  constructor() { }

  ngOnInit() {
  }

}
