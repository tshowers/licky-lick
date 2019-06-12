import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetStats17Component } from './lick-app-widget-stats17.component';

@NgModule({
  declarations: [LickAppWidgetStats17Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule,
    LickDataModule
  ],
  exports: [LickAppWidgetStats17Component]
})
export class LickAppWidgetStats17Module { }
