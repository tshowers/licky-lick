import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingFeatures2Component } from './lick-marketing-features2.component';

@NgModule({
  declarations: [LickMarketingFeatures2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingFeatures2Component]
})
export class LickMarketingFeatures2Module { }
