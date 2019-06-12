import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats13Component } from './lick-app-widget-stats13.component';

@NgModule({
  declarations: [LickAppWidgetStats13Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats13Component]
})
export class LickAppWidgetStats13Module { }
