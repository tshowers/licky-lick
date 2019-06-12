import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetListContentComponent } from './lick-app-widget-list-content.component';

@NgModule({
  declarations: [LickAppWidgetListContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    CountToModule
  ],
  exports: [LickAppWidgetListContentComponent]
})
export class LickAppWidgetListContentModule { }
