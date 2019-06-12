import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-stats10',
  templateUrl: './lick-app-widget-stats10.component.html',
  styles: []
})
export class LickAppWidgetStats10Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats10";

  currentDataDisplay = '';
  pastDataDisplay = 'none';

  @Input() currentButtonText = "Today";
  @Input() pastButtonText = "Yesterday";
  @Input() data1 : any[] = [];
  @Input() data2 : any[] = [];
  @Input() showMoreLink;
  @Input() router: Router;

  constructor() { }

  ngOnInit() {
  }

  showCurrentData() : void {
    this.currentDataDisplay = '';
    this.pastDataDisplay = 'none';
  }

  showPastData() : void {
    this.currentDataDisplay = 'none';
    this.pastDataDisplay = '';
  }

  showMore() : void {
    this.router.navigate([this.showMoreLink]);
  }

}
