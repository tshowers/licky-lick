import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'licky-lick-marketing-video1',
  templateUrl: './lick-marketing-video1.component.html',
  styles: []
})
export class LickMarketingVideo1Component implements OnInit {

  @Input() headingText = "licky-lick-marketing-video1";
  @Input() descriptionText = "Quo voluptas assumenda est, qui blanditiis praesentium voluptatum explicabo rem aperiam deleniti atque. Esse, quam nihil molestiae non numquam eius modi tempora incidunt.";
  @Input() videoURL : any = "https://www.youtube.com/embed/YfpJ4KPbeIA";
  @Input() imageURL = "http://via.placeholder.com/1450x816";

  constructor(public domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }


}
