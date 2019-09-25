import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetListContentModule } from 'lick-app-widget-list-content';
import { LickAppWidgetWeatherModule } from 'lick-app-widget-weather';
import { LickAppWidgetPost5Module } from 'lick-app-widget-post5';
import { LickAppWidgetLeftSideMenuComponent } from './lick-app-widget-left-side-menu.component';

@NgModule({
  declarations: [LickAppWidgetLeftSideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LickDataModule,
    LickyServicesModule,
    LickAppWidgetListContentModule,
    LickAppWidgetWeatherModule,
    LickAppWidgetPost5Module
  ],
  exports: [LickAppWidgetLeftSideMenuComponent]
})
export class LickAppWidgetLeftSideMenuModule { }
