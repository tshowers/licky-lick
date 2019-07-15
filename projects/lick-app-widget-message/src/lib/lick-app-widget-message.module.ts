import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetMessageComponent } from './lick-app-widget-message.component';

@NgModule({
  declarations: [LickAppWidgetMessageComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LickAppWidgetMessageComponent]
})
export class LickAppWidgetMessageModule { }
