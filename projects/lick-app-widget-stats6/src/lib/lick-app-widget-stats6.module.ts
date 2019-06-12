import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats6Component } from './lick-app-widget-stats6.component';

@NgModule({
  declarations: [LickAppWidgetStats6Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats6Component]
})
export class LickAppWidgetStats6Module { }
