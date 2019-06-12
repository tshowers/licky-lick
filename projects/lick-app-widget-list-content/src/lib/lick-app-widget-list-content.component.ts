import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-list-content',
  templateUrl: './lick-app-widget-list-content.component.html',
  styles: []
})
export class LickAppWidgetListContentComponent implements OnInit {

  @Input() data : any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
