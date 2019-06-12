import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetListOrderComponent } from './lick-app-widget-list-order.component';

@NgModule({
  declarations: [LickAppWidgetListOrderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    CountToModule
  ],
  exports: [LickAppWidgetListOrderComponent]
})
export class LickAppWidgetListOrderModule { }
