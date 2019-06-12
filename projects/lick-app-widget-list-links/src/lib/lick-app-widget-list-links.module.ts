import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetListLinksComponent } from './lick-app-widget-list-links.component';

@NgModule({
  declarations: [LickAppWidgetListLinksComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    CountToModule
  ],
  exports: [LickAppWidgetListLinksComponent]
})
export class LickAppWidgetListLinksModule { }
