import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats16Component } from './lick-app-widget-stats16.component';

@NgModule({
  declarations: [LickAppWidgetStats16Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats16Component]
})
export class LickAppWidgetStats16Module { }
