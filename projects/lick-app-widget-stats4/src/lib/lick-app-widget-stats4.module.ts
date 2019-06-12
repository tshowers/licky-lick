import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats4Component } from './lick-app-widget-stats4.component';

@NgModule({
  declarations: [LickAppWidgetStats4Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats4Component]
})
export class LickAppWidgetStats4Module { }
