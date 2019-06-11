import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingFeatures1Component } from './lick-marketing-features1.component';

@NgModule({
  declarations: [LickMarketingFeatures1Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingFeatures1Component]
})
export class LickMarketingFeatures1Module { }
