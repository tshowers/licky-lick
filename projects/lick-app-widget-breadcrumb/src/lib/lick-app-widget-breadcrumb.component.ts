import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Crumb {
  name: string;
  link: string;
  active: boolean;
}


@Component({
  selector: 'licky-lick-app-widget-breadcrumb',
  templateUrl: './lick-app-widget-breadcrumb.component.html',
  styles: []
})
export class LickAppWidgetBreadcrumbComponent implements OnInit {

  @Input() crumbs: Crumb[] = [
    { name: "home", link: "/", active: false },
    { name: "contacts", link: "/", active: false },
    { name: "create", link: "/", active: true }
  ];
  @Input() router: Router;

  constructor() {}

  ngOnInit() {
  }

  onRouteTo(link): void {
    if (link.indexOf('http') >= 0)
      window.open(link, '_blank');
    else
      this.router.navigate([link]);
  }
}
