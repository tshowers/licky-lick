import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetPost4Component } from './lick-app-widget-post4.component';

@NgModule({
  declarations: [LickAppWidgetPost4Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetPost4Component]
})
export class LickAppWidgetPost4Module { }
