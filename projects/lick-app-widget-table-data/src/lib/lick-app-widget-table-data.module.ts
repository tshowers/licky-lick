import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetTableDataComponent } from './lick-app-widget-table-data.component';

@NgModule({
  declarations: [LickAppWidgetTableDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickAppWidgetTableDataComponent]
})
export class LickAppWidgetTableDataModule { }
