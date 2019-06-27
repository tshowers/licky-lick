import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetLogoutComponent } from './lick-app-widget-logout.component';

@NgModule({
  declarations: [LickAppWidgetLogoutComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LickAppWidgetLogoutComponent]
})
export class LickAppWidgetLogoutModule { }
