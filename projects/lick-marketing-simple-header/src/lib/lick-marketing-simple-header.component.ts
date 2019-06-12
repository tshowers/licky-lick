import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-simple-header',
  templateUrl: './lick-marketing-simple-header.component.html',
  styles: []
})
export class LickMarketingSimpleHeaderComponent implements OnInit {

  @Input() headingText = 'licky-lick-marketing-simple-header';
  @Input() backgroundImage = 'http://via.placeholder.com/1920x1275';

  constructor() { }

  ngOnInit() {
  }

}
