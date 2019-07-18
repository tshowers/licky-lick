import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-profile',
  templateUrl: './lick-app-widget-profile.component.html',
  styles: []
})
export class LickAppWidgetProfileComponent implements OnInit {

  @Input() user : User;
  @Input() firebaseUser: any;

  @Output() pageEvent = new EventEmitter();

  defaultImage = "assets/images/default-user.png"

  constructor() { }

  ngOnInit() {
  }

  onPageEvent() : void {
    this.pageEvent.emit('resend verification');
  }


}
