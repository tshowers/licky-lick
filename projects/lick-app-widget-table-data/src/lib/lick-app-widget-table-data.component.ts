import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'licky-lick-app-widget-table-data',
  templateUrl: './lick-app-widget-table-data.component.html',
  styles: []
})
export class LickAppWidgetTableDataComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() headingText = "licky-lick-app-widget-table-data";
  @Input() contextPath = '';
  @Input() dataContext;
  @Input() router: Router;
  @Input() path: string;
  @Input() dataRoute;
  @Input() viewable: boolean = true;
  @Input() editable: boolean = true;
  @Input() canCreate: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onDetail(id: string) {
    this.router.navigate([this.contextPath + this.path + id], { queryParamsHandling: 'preserve' });
  }

  onEdit(id: string) {
    this.router.navigate([this.contextPath + this.path + id + '/edit'], { queryParamsHandling: 'preserve' });
  }

  onDelete(item) {
    console.log("Delete clicked");
  }


}
