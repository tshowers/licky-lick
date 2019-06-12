import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats1Component } from './lick-app-widget-stats1.component';

@NgModule({
  declarations: [LickAppWidgetStats1Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats1Component]
})
export class LickAppWidgetStats1Module { }
