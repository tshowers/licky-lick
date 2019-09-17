import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-data-footer',
  templateUrl: './lick-app-widget-data-footer.component.html',
  styles: []
})
export class LickAppWidgetDataFooterComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
