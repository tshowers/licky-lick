import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetWeatherComponent } from './lick-app-widget-weather.component';

@NgModule({
  declarations: [LickAppWidgetWeatherComponent],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule,
    LickDataModule,
    LickyServicesModule
  ],
  exports: [LickAppWidgetWeatherComponent]
})
export class LickAppWidgetWeatherModule { }
