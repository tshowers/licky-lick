import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats2Component } from './lick-app-widget-stats2.component';

@NgModule({
  declarations: [LickAppWidgetStats2Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats2Component]
})
export class LickAppWidgetStats2Module { }
