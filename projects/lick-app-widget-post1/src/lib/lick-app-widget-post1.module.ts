import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetPost1Component } from './lick-app-widget-post1.component';

@NgModule({
  declarations: [LickAppWidgetPost1Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetPost1Component]
})
export class LickAppWidgetPost1Module { }
