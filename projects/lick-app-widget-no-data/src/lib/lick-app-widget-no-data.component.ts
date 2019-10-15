import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-no-data',
  templateUrl: './lick-app-widget-no-data.component.html',
  styles: []
})
export class LickAppWidgetNoDataComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onNewItem() {
    console.log("LickAppWidgetNoDataComponent onNewItem")
    this.newItemEvent.emit();
  }

}
