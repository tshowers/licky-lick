import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetDataFooterComponent } from './lick-app-widget-data-footer.component';

@NgModule({
  declarations: [LickAppWidgetDataFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickAppWidgetDataFooterComponent]
})
export class LickAppWidgetDataFooterModule { }
