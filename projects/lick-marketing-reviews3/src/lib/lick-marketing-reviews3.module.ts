import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingReviews3Component } from './lick-marketing-reviews3.component';

@NgModule({
  declarations: [LickMarketingReviews3Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingReviews3Component]
})
export class LickMarketingReviews3Module { }
