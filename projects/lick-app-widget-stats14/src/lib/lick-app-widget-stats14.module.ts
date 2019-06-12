import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats14Component } from './lick-app-widget-stats14.component';

@NgModule({
  declarations: [LickAppWidgetStats14Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats14Component]
})
export class LickAppWidgetStats14Module { }
