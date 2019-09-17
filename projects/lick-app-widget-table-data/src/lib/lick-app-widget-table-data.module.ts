import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetNoDataModule } from 'lick-app-widget-no-data';

import { LickAppWidgetTableDataComponent } from './lick-app-widget-table-data.component';

@NgModule({
  declarations: [LickAppWidgetTableDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    LickAppWidgetNoDataModule
  ],
  exports: [LickAppWidgetTableDataComponent]
})
export class LickAppWidgetTableDataModule { }
