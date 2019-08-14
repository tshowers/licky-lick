import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetNotificationTaskComponent } from './lick-app-widget-notification-task.component';

@NgModule({
  declarations: [LickAppWidgetNotificationTaskComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    LickyServicesModule
  ],
  exports: [LickAppWidgetNotificationTaskComponent]
})
export class LickAppWidgetNotificationTaskModule { }
