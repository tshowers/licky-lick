import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetNotificationCartComponent } from './lick-app-widget-notification-cart.component';

@NgModule({
  declarations: [LickAppWidgetNotificationCartComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    LickyServicesModule
  ],
  exports: [LickAppWidgetNotificationCartComponent]
})
export class LickAppWidgetNotificationCartModule { }
