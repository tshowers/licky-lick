import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetPost2Component } from './lick-app-widget-post2.component';

@NgModule({
  declarations: [LickAppWidgetPost2Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetPost2Component]
})
export class LickAppWidgetPost2Module { }
