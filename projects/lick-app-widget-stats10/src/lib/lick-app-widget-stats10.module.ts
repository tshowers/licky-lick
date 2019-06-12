import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetStats10Component } from './lick-app-widget-stats10.component';

@NgModule({
  declarations: [LickAppWidgetStats10Component],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetStats10Component]
})
export class LickAppWidgetStats10Module { }
