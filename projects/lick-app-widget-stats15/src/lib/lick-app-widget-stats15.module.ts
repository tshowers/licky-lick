import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats15Component } from './lick-app-widget-stats15.component';

@NgModule({
  declarations: [LickAppWidgetStats15Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats15Component]
})
export class LickAppWidgetStats15Module { }
