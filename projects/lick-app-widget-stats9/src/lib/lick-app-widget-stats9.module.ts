import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats9Component } from './lick-app-widget-stats9.component';

@NgModule({
  declarations: [LickAppWidgetStats9Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats9Component]
})
export class LickAppWidgetStats9Module { }
