import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'licky-lick-app-widget-article',
  templateUrl: './lick-app-widget-article.component.html',
  styles: []
})
export class LickAppWidgetArticleComponent implements OnInit {

  @Input() data: any[];
  currentPage: number = 1;
  @Input() pageSize: number = 20;
  @Input() totalRecords: number = 0;
  @Output() currentPageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onPageChange(value): void {
    this.currentPage = value;
    this.currentPageEvent.emit(this.currentPage);
  }


}
