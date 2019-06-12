import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats3Component } from './lick-app-widget-stats3.component';

@NgModule({
  declarations: [LickAppWidgetStats3Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats3Component]
})
export class LickAppWidgetStats3Module { }
