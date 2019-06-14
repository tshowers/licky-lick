import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-stats13',
  templateUrl: './lick-app-widget-stats13.component.html',
  styles: []
})
export class LickAppWidgetStats13Component implements OnInit {

  @Input() headingText = "licky-lick-app-widget-stats13";
  @Input() countHeading1 = "Active Users";
  @Input() count1 : number = Math.floor(Math.random() * 100);
  @Input() countHeading2 = "Over Due";
  @Input() count2 : number = Math.floor(Math.random() * 100);
  @Input() countHeading3 = "Sales";
  @Input() count3 : number = Math.floor(Math.random() * 100);
  @Input() countHeading4 = "expense";
  @Input() count4 : number = Math.floor(Math.random() * 100);
  @Input() countHeading5 = "Active Users";
  @Input() count5 : number = Math.floor(Math.random() * 100);
  @Input() countHeading6 = "Over Due";
  @Input() count6 : number = Math.floor(Math.random() * 100);

  constructor() { }

  ngOnInit() {
  }

}
