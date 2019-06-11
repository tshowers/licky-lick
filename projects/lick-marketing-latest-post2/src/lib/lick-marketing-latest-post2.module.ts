import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule }from 'lick-data';
import { LickMarketingLatestPost2Component } from './lick-marketing-latest-post2.component';

@NgModule({
  declarations: [LickMarketingLatestPost2Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingLatestPost2Component]
})
export class LickMarketingLatestPost2Module { }
