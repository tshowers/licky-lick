import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetMessagesComponent } from './lick-app-widget-messages.component';

@NgModule({
  declarations: [LickAppWidgetMessagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    CountToModule,
  ],
  exports: [LickAppWidgetMessagesComponent]
})
export class LickAppWidgetMessagesModule { }
