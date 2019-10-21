import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickAppWidgetUnderConstructionComponent } from './lick-app-widget-under-construction.component';

@NgModule({
  declarations: [LickAppWidgetUnderConstructionComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LickAppWidgetUnderConstructionComponent]
})
export class LickAppWidgetUnderConstructionModule { }
