import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-features3',
  templateUrl: './lick-marketing-features3.component.html',
  styles: []
})
export class LickMarketingFeatures3Component implements OnInit {

  @Input() headingText = "Features";
  @Input() descriptionText = "Eveniet, ut aliquid ex ea voluptate velit esse, quam nihil molestiae. Culpa, qui in culpa, qui dolorem eum fugiat, quo voluptas nulla vero.";
  @Input() imageURL = "http://via.placeholder.com/600x1220";

  @Input() featureHeading1 = "Productivity";
  @Input() featureDescription1 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores.";
  @Input() featureIcon1 = "icon-rocket";

  @Input() featureHeading2 = "High Quality";
  @Input() featureDescription2 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon2 = "icon-diamond";

  @Input() featureHeading3 = "Free Updates";
  @Input() featureDescription3 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon3 = "icon-refresh";

  @Input() featureHeading4 = "Productivity";
  @Input() featureDescription4 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon4 = "icon-rocket";

  @Input() featureHeading5 = "High Quality";
  @Input() featureDescription5 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon5 = "icon-diamond";

  @Input() featureHeading6 = "Free Updates";
  @Input() featureDescription6 = "Accusantium doloremque laudantium, totam aperiam eaque ipsa, quae ab illo inventore reiciendis aut asperiores repellat.";
  @Input() featureIcon6 = "icon-refresh";

  constructor() { }

  ngOnInit() {
  }

}
