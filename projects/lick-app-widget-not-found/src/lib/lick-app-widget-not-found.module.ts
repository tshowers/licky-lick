import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetNoDataModule } from 'lick-app-widget-no-data';
import { LickAppWidgetNotFoundComponent } from './lick-app-widget-not-found.component';

@NgModule({
  declarations: [LickAppWidgetNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickAppWidgetNoDataModule
  ],
  exports: [LickAppWidgetNotFoundComponent]
})
export class LickAppWidgetNotFoundModule { }
