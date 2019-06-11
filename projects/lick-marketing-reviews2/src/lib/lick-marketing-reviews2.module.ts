import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingReviews2Component } from './lick-marketing-reviews2.component';

@NgModule({
  declarations: [LickMarketingReviews2Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingReviews2Component]
})
export class LickMarketingReviews2Module { }
