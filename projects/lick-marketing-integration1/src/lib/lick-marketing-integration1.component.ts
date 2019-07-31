import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-integration1',
  templateUrl: './lick-marketing-integration1.component.html',
  styles: []
})
export class LickMarketingIntegration1Component implements OnInit {

  @Input() headingText = "Integration";
  @Input() descriptionText = "Dignissimos ducimus, qui ratione voluptatem accusantium doloremque laudantium. Vel eum iure reprehenderit, qui in culpa, qui quos. Voluptatem, quia dolor repellendus sunt perferendis doloribus asperiores.";
  @Input() integrationHeading1 = "MailChimp";
  @Input() integrationIcon1 = "http://via.placeholder.com/42x48";
  @Input() integrationDescription1 = "Send emails";
  @Input() buttonLink1;
  @Input() buttonIcon1 = "icon-arrow-right";


  @Input() integrationHeading2 = "Slack";
  @Input() integrationIcon2 = "http://via.placeholder.com/42x48";
  @Input() integrationDescription2 = "Messaging";
  @Input() buttonLink2;
  @Input() buttonIcon2 = "icon-arrow-right";

  @Input() integrationHeading3 = "Twitter";
  @Input() integrationIcon3 = "http://via.placeholder.com/42x48";
  @Input() integrationDescription3 = "News feed";
  @Input() buttonLink3;
  @Input() buttonIcon3 = "icon-arrow-right";

  @Input() integrationHeading4 = "Instagram";
  @Input() integrationIcon4 = "http://via.placeholder.com/42x48";
  @Input() integrationDescription4 = "Photo feed";
  @Input() buttonLink4;
  @Input() buttonIcon4 = "icon-arrow-right";

  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(link) : void {
    this.pageEvent.emit(link);
  }

}
