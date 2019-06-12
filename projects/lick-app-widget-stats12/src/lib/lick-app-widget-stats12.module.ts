import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats12Component } from './lick-app-widget-stats12.component';

@NgModule({
  declarations: [LickAppWidgetStats12Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats12Component]
})
export class LickAppWidgetStats12Module { }
