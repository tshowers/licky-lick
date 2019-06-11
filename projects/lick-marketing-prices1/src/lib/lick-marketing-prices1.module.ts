import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingPrices1Component } from './lick-marketing-prices1.component';

@NgModule({
  declarations: [LickMarketingPrices1Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingPrices1Component]
})
export class LickMarketingPrices1Module { }
