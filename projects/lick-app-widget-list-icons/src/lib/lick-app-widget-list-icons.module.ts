import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetListIconsComponent } from './lick-app-widget-list-icons.component';

@NgModule({
  declarations: [LickAppWidgetListIconsComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    CountToModule
  ],
  exports: [LickAppWidgetListIconsComponent]
})
export class LickAppWidgetListIconsModule { }
