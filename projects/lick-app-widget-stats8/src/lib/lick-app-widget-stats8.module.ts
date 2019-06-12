import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats8Component } from './lick-app-widget-stats8.component';

@NgModule({
  declarations: [LickAppWidgetStats8Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats8Component]
})
export class LickAppWidgetStats8Module { }
