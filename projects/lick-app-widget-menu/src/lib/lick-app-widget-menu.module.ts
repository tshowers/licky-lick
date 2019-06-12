import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetMenuComponent } from './lick-app-widget-menu.component';

@NgModule({
  declarations: [LickAppWidgetMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickAppWidgetMenuComponent]
})
export class LickAppWidgetMenuModule { }
