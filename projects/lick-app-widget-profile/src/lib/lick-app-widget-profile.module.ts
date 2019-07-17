import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountToModule } from 'angular-count-to';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetProfileComponent } from './lick-app-widget-profile.component';

@NgModule({
  declarations: [LickAppWidgetProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    CountToModule,
    LickDataModule
  ],
  exports: [LickAppWidgetProfileComponent]
})
export class LickAppWidgetProfileModule { }
