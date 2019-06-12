import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats5Component } from './lick-app-widget-stats5.component';

@NgModule({
  declarations: [LickAppWidgetStats5Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats5Component]
})
export class LickAppWidgetStats5Module { }
