import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetCardDeckComponent } from './lick-app-widget-card-deck.component';

@NgModule({
  declarations: [LickAppWidgetCardDeckComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LickAppWidgetCardDeckComponent]
})
export class LickAppWidgetCardDeckModule { }
