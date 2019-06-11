import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingReviews1Component } from './lick-marketing-reviews1.component';

@NgModule({
  declarations: [LickMarketingReviews1Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingReviews1Component]
})
export class LickMarketingReviews1Module { }
