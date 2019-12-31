import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetDataFooterModule } from 'lick-app-widget-data-footer';
import { LickAppWidgetCardColumnComponent } from './lick-app-widget-card-column.component';

@NgModule({
  declarations: [LickAppWidgetCardColumnComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    LickAppWidgetDataFooterModule
  ],
  exports: [LickAppWidgetCardColumnComponent]
})
export class LickAppWidgetCardColumnModule { }
