import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-spinner',
  templateUrl: './lick-app-widget-spinner.component.html',
  styleUrls: ['./lick-app-widget-spinner.component.css']
})
export class LickAppWidgetSpinnerComponent implements OnInit {

  isSpinner1: boolean = false;
  isSpinner2: boolean = false;
  isSpinner3: boolean = false;
  isSpinner4: boolean = false;
  isSpinner5: boolean = true;
  isSpinner6: boolean = false;

  @Input() spinner: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onSpinner(index: number): void {
    switch (index) {
      case 1:
        this.isSpinner1 = true;
        this.isSpinner2 = false;
        this.isSpinner3 = false;
        this.isSpinner4 = false;
        this.isSpinner5 = false;
        this.isSpinner6 = false;
        break;
      case 2:
        this.isSpinner1 = false;
        this.isSpinner2 = true;
        this.isSpinner3 = false;
        this.isSpinner4 = false;
        this.isSpinner5 = false;
        this.isSpinner6 = false;
        break;
      case 3:
        this.isSpinner1 = false;
        this.isSpinner2 = false;
        this.isSpinner3 = true;
        this.isSpinner4 = false;
        this.isSpinner5 = false;
        this.isSpinner6 = false;
        break;
      case 4:
        this.isSpinner1 = false;
        this.isSpinner2 = false;
        this.isSpinner3 = false;
        this.isSpinner4 = true;
        this.isSpinner5 = false;
        this.isSpinner6 = false;
        break;
      case 5:
        this.isSpinner1 = false;
        this.isSpinner2 = false;
        this.isSpinner3 = false;
        this.isSpinner4 = false;
        this.isSpinner5 = true;
        this.isSpinner6 = false;
        break;
      case 6:
        this.isSpinner1 = false;
        this.isSpinner2 = false;
        this.isSpinner3 = false;
        this.isSpinner4 = false;
        this.isSpinner5 = false;
        this.isSpinner6 = true;
        break;
    }
  }

}
