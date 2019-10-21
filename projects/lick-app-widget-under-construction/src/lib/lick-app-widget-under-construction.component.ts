import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'licky-lick-app-widget-under-construction',
  templateUrl: './lick-app-widget-under-construction.component.html',
  styles: []
})
export class LickAppWidgetUnderConstructionComponent implements OnInit {

  @Input() logoName = "LogoName";
  @Input() logoURL = "http://via.placeholder.com/100x100";
  @Input() homePageLink = "/";
  @Input() headingText = "Under Construction";
  @Input() subText = "THIS PAGE IS UNDER CONSTRUCTION";
  @Input() goBackText = "Go Back";

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

}
