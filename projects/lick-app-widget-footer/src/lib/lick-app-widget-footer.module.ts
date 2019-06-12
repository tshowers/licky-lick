import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetFooterComponent } from './lick-app-widget-footer.component';

@NgModule({
  declarations: [LickAppWidgetFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickAppWidgetFooterComponent]
})
export class LickAppWidgetFooterModule { }
