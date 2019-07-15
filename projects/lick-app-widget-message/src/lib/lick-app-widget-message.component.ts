import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-message',
  templateUrl: './lick-app-widget-message.component.html',
  styles: []
})
export class LickAppWidgetMessageComponent implements OnInit {

  @Input() statusText = "Oops!";
  @Input() message = "PAGE NOT FOUND";
  @Input() redirectLink = "/";
  @Input() linkText = "Go to Home Page";


  constructor() { }

  ngOnInit() {
  }

}
