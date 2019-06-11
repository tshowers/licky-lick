import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingFooter1Component } from './lick-marketing-footer1.component';

@NgModule({
  declarations: [LickMarketingFooter1Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingFooter1Component]
})
export class LickMarketingFooter1Module { }
