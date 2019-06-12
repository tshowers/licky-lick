import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountToModule } from 'angular-count-to';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetFeedComponent } from './lick-app-widget-feed.component';

@NgModule({
  declarations: [LickAppWidgetFeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CountToModule,
    LickDataModule
  ],
  exports: [LickAppWidgetFeedComponent]
})
export class LickAppWidgetFeedModule { }
