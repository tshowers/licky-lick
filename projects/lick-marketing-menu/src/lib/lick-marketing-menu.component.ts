import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-menu',
  templateUrl: './lick-marketing-menu.component.html',
  styles: []
})
export class LickMarketingMenuComponent implements OnInit {

  @Input() logo = "https://via.placeholder.com/64";
  @Input() logoName = "Logo Name";
  @Input() verified : boolean = true;
  @Input() resendVerificationLink : boolean = false;
  @Output() menuEvent = new EventEmitter();
  @Input() verificationText = "Unverified";
  @Input() profileLink;
  @Input() profileImage;
  @Input() displayName;
  @Input() companyLink = "/";
  @Input() isExternalLink ; boolean = false;

  @Input() menuItems: any[] = [
    {
      "link" : "/marketing/general-widgets",
      "name" : "Marketing",
    },
    {
      "link" : "/marketing/header-widgets",
      "name" : "Header"
    },
    {
      "link" : "/marketing/misc-widgets",
      "name" : "Miscellaneous"
    },
    {
      "link" : "/application/gernal-widgets",
      "name" : "App"
    },
    {
      "link" : "/application/stat-widgets",
      "name" : "Stats"
    },
    {
      "link" : "/application/news-widgets",
      "name" : "News"
    },
    {
      "link" : "/application/page-widgets",
      "name" : "Page"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onMenuEvent() : void {
    this.menuEvent.emit('resendVerification');
  }


}
