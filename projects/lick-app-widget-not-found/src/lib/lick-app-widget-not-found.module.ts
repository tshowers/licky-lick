import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetNotFoundComponent } from './lick-app-widget-not-found.component';

@NgModule({
  declarations: [LickAppWidgetNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LickAppWidgetNotFoundComponent]
})
export class LickAppWidgetNotFoundModule { }
