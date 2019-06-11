import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingPrices2Component } from './lick-marketing-prices2.component';

@NgModule({
  declarations: [LickMarketingPrices2Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingPrices2Component]
})
export class LickMarketingPrices2Module { }
