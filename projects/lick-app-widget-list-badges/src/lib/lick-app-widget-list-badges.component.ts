import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-list-badges',
  templateUrl: './lick-app-widget-list-badges.component.html',
  styles: []
})
export class LickAppWidgetListBadgesComponent implements OnInit {

  @Input() data : any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
