import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetTotalsComponent } from './lick-app-widget-totals.component';

@NgModule({
  declarations: [LickAppWidgetTotalsComponent],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule
  ],
  exports: [LickAppWidgetTotalsComponent]
})
export class LickAppWidgetTotalsModule { }
