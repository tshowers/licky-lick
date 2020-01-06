import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetNoDataModule } from 'lick-app-widget-no-data';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LickAppWidgetCardColumnModule } from 'lick-app-widget-card-column';

import { LickAppWidgetTableDataComponent } from './lick-app-widget-table-data.component';

@NgModule({
  declarations: [LickAppWidgetTableDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    UiSwitchModule,
    LickAppWidgetNoDataModule,
    LickAppWidgetCardColumnModule
  ],
  exports: [LickAppWidgetTableDataComponent]
})
export class LickAppWidgetTableDataModule { }
