import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingTryIt1Component } from './lick-marketing-try-it1.component';

@NgModule({
  declarations: [LickMarketingTryIt1Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingTryIt1Component]
})
export class LickMarketingTryIt1Module { }
