import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-card-deck',
  templateUrl: './lick-app-widget-card-deck.component.html',
  styles: []
})
export class LickAppWidgetCardDeckComponent implements OnInit {

  @Input() data : any = [];

  constructor() { }

  ngOnInit() {
  }

}
