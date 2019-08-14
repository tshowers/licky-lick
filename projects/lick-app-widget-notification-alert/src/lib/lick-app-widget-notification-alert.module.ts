import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetNotificationAlertComponent } from './lick-app-widget-notification-alert.component';

@NgModule({
  declarations: [LickAppWidgetNotificationAlertComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    LickyServicesModule
  ],
  exports: [LickAppWidgetNotificationAlertComponent]
})
export class LickAppWidgetNotificationAlertModule { }
