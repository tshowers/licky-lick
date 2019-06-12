import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats11Component } from './lick-app-widget-stats11.component';

@NgModule({
  declarations: [LickAppWidgetStats11Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats11Component]
})
export class LickAppWidgetStats11Module { }
