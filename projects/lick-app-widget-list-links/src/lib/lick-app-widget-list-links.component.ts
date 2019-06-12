import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-list-links',
  templateUrl: './lick-app-widget-list-links.component.html',
  styles: []
})
export class LickAppWidgetListLinksComponent implements OnInit {

  @Input() data : any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
