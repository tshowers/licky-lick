import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-features4',
  templateUrl: './lick-marketing-features4.component.html',
  styles: []
})
export class LickMarketingFeatures4Component implements OnInit {

  @Input() headingText = "Features";
  @Input() descriptionText = "Ratione voluptatem sequi nesciunt, neque porro, quod maxime placeat, facere possimus, omnis iste natus. Illum, qui cumque nihil impedit dolorem eum iure reprehenderit.";

  @Input() featureIcon1 = "icon-rocket";
  @Input() featureHeading1 = "Productivity";
  @Input() featureDescription1 = "Accusantium doloremque laudantium, totam asperiores aperiam eaque ipsa, quae ab illo inventore.";

  @Input() featureIcon2 = "icon-shield";
  @Input() featureHeading2 = "Maximum Protection";
  @Input() featureDescription2 = "Accusantium doloremque laudantium, totam asperiores aperiam eaque ipsa, quae ab illo inventore.";

  @Input() featureIcon3 = "icon-diamond";
  @Input() featureHeading3 = "High Quality";
  @Input() featureDescription3 = "Accusantium doloremque laudantium, totam asperiores aperiam eaque ipsa, quae ab illo inventore.";

  @Input() featureIcon4 = "icon-refresh";
  @Input() featureHeading4 = "Free Updates";
  @Input() featureDescription4 = "Accusantium doloremque laudantium, totam asperiores aperiam eaque ipsa, quae ab illo inventore.";

  constructor() { }

  ngOnInit() {
  }

}
