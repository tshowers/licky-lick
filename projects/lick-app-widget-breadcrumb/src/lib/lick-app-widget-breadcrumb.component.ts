import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  @Output() pageEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onPageEvent(link: string): void {
    this.pageEvent.emit(link);
  }
}
