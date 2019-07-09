import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-not-found',
  templateUrl: './lick-app-widget-not-found.component.html',
  styles: []
})
export class LickAppWidgetNotFoundComponent implements OnInit {

  @Input() statusText = "Oops!";
  @Input() errorCode = "4 0 4";
  @Input() errorMessage = "PAGE NOT FOUND";
  @Input() subErrorMessage = "APOLOGIES!";
  @Input() redirectLink = "/";
  @Input() linkText = "Go to Home Page";
  @Input() problemText = "Report a Problem?";
  @Input() contactText = "Contact us";
  @Input() contactLink = "/contact";

  constructor() { }

  ngOnInit() {
  }

}
