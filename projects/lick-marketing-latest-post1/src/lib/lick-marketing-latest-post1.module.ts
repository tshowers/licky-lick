import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule }from 'lick-data';
import { LickMarketingLatestPost1Component } from './lick-marketing-latest-post1.component';

@NgModule({
  declarations: [LickMarketingLatestPost1Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingLatestPost1Component]
})
export class LickMarketingLatestPost1Module { }
