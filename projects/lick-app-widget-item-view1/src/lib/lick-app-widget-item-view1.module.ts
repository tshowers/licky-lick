import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetDataFooterModule } from 'lick-app-widget-data-footer';
import { LickAppWidgetItemView1Component } from './lick-app-widget-item-view1.component';

@NgModule({
  declarations: [LickAppWidgetItemView1Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    LickAppWidgetDataFooterModule
  ],
  exports: [LickAppWidgetItemView1Component]
})
export class LickAppWidgetItemView1Module { }
