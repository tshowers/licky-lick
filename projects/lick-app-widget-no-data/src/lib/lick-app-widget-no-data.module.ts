import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LickAppWidgetLoader1Module } from 'lick-app-widget-loader1';
import { LickAppWidgetNoDataComponent } from './lick-app-widget-no-data.component';

@NgModule({
  declarations: [LickAppWidgetNoDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickAppWidgetLoader1Module
  ],
  exports: [LickAppWidgetNoDataComponent]
})
export class LickAppWidgetNoDataModule { }
