import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-features2',
  templateUrl: './lick-marketing-features2.component.html',
  styles: []
})
export class LickMarketingFeatures2Component implements OnInit {

  @Input() headingText = "Features";
  @Input() descriptionText = "Facilis est eligendi optio, cumque nihil impedit. Est, qui ratione accusantium voluptatem accusantium doloremque laudantium, totam atque corrupti, quos dolores eos, qui id est.";

  @Input() featureHeading1 = "Productivity";
  @Input() featureDescription1 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon1 = "icon-rocket";

  @Input() featureHeading2 = "High Quality";
  @Input() featureDescription2 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon2 = "icon-diamond";

  @Input() featureHeading3 = "Free Updates";
  @Input() featureDescription3 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon3 = "icon-refresh";

  constructor() { }

  ngOnInit() {
  }

}
