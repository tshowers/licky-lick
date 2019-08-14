import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetNoDataComponent } from './lick-app-widget-no-data.component';

@NgModule({
  declarations: [LickAppWidgetNoDataComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LickAppWidgetNoDataComponent]
})
export class LickAppWidgetNoDataModule { }
