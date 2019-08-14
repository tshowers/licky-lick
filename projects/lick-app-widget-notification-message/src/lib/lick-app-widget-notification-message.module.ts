import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetNotificationMessageComponent } from './lick-app-widget-notification-message.component';

@NgModule({
  declarations: [LickAppWidgetNotificationMessageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LickDataModule,
    LickyServicesModule
  ],
  exports: [LickAppWidgetNotificationMessageComponent]
})
export class LickAppWidgetNotificationMessageModule { }
