import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetPost5Component } from './lick-app-widget-post5.component';

@NgModule({
  declarations: [LickAppWidgetPost5Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetPost5Component]
})
export class LickAppWidgetPost5Module { }
