import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetSpinnerComponent } from './lick-app-widget-spinner.component';

@NgModule({
  declarations: [LickAppWidgetSpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LickAppWidgetSpinnerComponent]
})
export class LickAppWidgetSpinnerModule { }
