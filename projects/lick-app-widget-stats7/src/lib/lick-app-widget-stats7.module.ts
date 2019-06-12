import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats7Component } from './lick-app-widget-stats7.component';

@NgModule({
  declarations: [LickAppWidgetStats7Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats7Component]
})
export class LickAppWidgetStats7Module { }
