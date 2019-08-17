import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetNotificationAlertModule } from 'lick-app-widget-notification-alert';
import { LickAppWidgetNotificationMessageModule } from 'lick-app-widget-notification-message';
import { LickAppWidgetNotificationTaskModule } from 'lick-app-widget-notification-task';
import { LickAppWidgetMenuComponent } from './lick-app-widget-menu.component';

@NgModule({
  declarations: [LickAppWidgetMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    LickyServicesModule,
    FormsModule,
    LickAppWidgetNotificationAlertModule,
    LickAppWidgetNotificationMessageModule,
    LickAppWidgetNotificationTaskModule
  ],
  exports: [LickAppWidgetMenuComponent]
})
export class LickAppWidgetMenuModule { }
