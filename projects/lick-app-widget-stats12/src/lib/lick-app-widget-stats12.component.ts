import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats12',
  templateUrl: './lick-app-widget-stats12.component.html',
  styles: []
})
export class LickAppWidgetStats12Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats12";
  currentDataDisplay = '';
  pastDataDisplay = 'none';
  @Input() currentButtonText = "Today";
  @Input() pastButtonText = "Yesterday";
  @Input() data1: any[] = [];
  @Input() data2: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  showCurrentData(): void {
    this.currentDataDisplay = '';
    this.pastDataDisplay = 'none';
  }

  showPastData(): void {
    this.currentDataDisplay = 'none';
    this.pastDataDisplay = '';
  }

  showMoreDetails(item: any): void {
    console.log("Show more details " + item);
  }


}
