import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats6',
  templateUrl: './lick-app-widget-stats6.component.html',
  styles: []
})
export class LickAppWidgetStats6Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats6";
  @Input() count : Number = Math.floor(Math.random() * 1000);
  @Input() label = "Total Files";
  @Input() iconClass = "fa fa-paperclip";
  @Input() showMoreLink = "/";
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
  }

  showMore() : void {
    this.router.navigate([this.showMoreLink]);
  }


}
