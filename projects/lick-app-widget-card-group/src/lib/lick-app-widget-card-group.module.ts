import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetCardGroupComponent } from './lick-app-widget-card-group.component';

@NgModule({
  declarations: [LickAppWidgetCardGroupComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickAppWidgetCardGroupComponent]
})
export class LickAppWidgetCardGroupModule { }
