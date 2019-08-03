import { Component, OnInit, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'licky-lick-marketing-lightbox1',
  templateUrl: './lick-marketing-lightbox1.component.html',
  styles: []
})
export class LickMarketingLightbox1Component implements OnInit {
  @Input() headerText = "Zoom gallery"
  @Input() descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  @Input() images = [
    {src : "http://via.placeholder.com/500x400", caption: "One", thumb: "http://via.placeholder.com/100x100"},
    {src : "http://via.placeholder.com/500x400", caption: "Two", thumb: "http://via.placeholder.com/100x100"},
    {src : "http://via.placeholder.com/500x400", caption: "Three", thumb: "http://via.placeholder.com/100x100"},
    {src : "http://via.placeholder.com/500x400", caption: "Four", thumb: "http://via.placeholder.com/100x100"},
  ];

  constructor(private _lightbox: Lightbox) { }

  ngOnInit() {
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.images, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
