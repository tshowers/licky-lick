import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetPost3Component } from './lick-app-widget-post3.component';

@NgModule({
  declarations: [LickAppWidgetPost3Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetPost3Component]
})
export class LickAppWidgetPost3Module { }
