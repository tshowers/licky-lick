import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-list-icons',
  templateUrl: './lick-app-widget-list-icons.component.html',
  styles: []
})
export class LickAppWidgetListIconsComponent implements OnInit {

  @Input() data : any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
