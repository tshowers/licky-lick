import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickAppWidgetListContentModule } from 'lick-app-widget-list-content';
import { LickAppWidgetStats10Module } from 'lick-app-widget-stats10';
import { LickAppWidgetWeatherModule } from 'lick-app-widget-weather';
import { LickAppWidgetLeftSideMenuComponent } from './lick-app-widget-left-side-menu.component';

@NgModule({
  declarations: [LickAppWidgetLeftSideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LickAppWidgetListContentModule,
    LickAppWidgetStats10Module,
    LickAppWidgetWeatherModule
  ],
  exports: [LickAppWidgetLeftSideMenuComponent]
})
export class LickAppWidgetLeftSideMenuModule { }
