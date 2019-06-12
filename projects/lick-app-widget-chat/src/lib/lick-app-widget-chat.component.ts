import { Component, OnInit, Input } from '@angular/core';
import { Message, User } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-chat',
  templateUrl: './lick-app-widget-chat.component.html',
  styles: []
})
export class LickAppWidgetChatComponent implements OnInit {

  @Input() headingText = "Chat";
  @Input() messages : Message[] = [];
  @Input() currentUser : User;
  @Input() activeUsers;
  defaultImage : string = "/assets/user.jpg"

  constructor() { }

  ngOnInit() {
  }

}
