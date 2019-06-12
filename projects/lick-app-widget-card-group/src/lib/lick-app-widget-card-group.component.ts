import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-card-group',
  templateUrl: './lick-app-widget-card-group.component.html',
  styles: []
})
export class LickAppWidgetCardGroupComponent implements OnInit {

  @Input() data : any = [];

  constructor() { }

  ngOnInit() {
  }

}
