import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats4',
  templateUrl: './lick-app-widget-stats4.component.html',
  styles: []
})
export class LickAppWidgetStats4Component implements OnInit {

  @Input() headingText : string = "licky-lick-app-widget-stats4";
  @Input() subHeadingText = "In Design";
  @Input() iconClass = "fa fa-folder-open-o";

  constructor() { }

  ngOnInit() {
  }

}
