import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingIntegration1Component } from './lick-marketing-integration1.component';

@NgModule({
  declarations: [LickMarketingIntegration1Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingIntegration1Component]
})
export class LickMarketingIntegration1Module { }
