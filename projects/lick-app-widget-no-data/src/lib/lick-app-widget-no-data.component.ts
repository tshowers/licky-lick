import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-no-data',
  templateUrl: './lick-app-widget-no-data.component.html',
  styles: []
})
export class LickAppWidgetNoDataComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter();
  @Input() newButton: boolean = true;
  isLoading = true;

  constructor() { }

  ngOnInit() {
  }

  onNewItem() {
    // console.log("LickAppWidgetNoDataComponent onNewItem")
    this.newItemEvent.emit();
  }

  onLoadingData() : void {
    setTimeout(() => {
      this.isLoading = false, 1500
    })
  }

}
