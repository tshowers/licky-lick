import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickAppWidgetLockScreenComponent } from './lick-app-widget-lock-screen.component';

@NgModule({
  declarations: [LickAppWidgetLockScreenComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LickAppWidgetLockScreenComponent]
})
export class LickAppWidgetLockScreenModule { }
