import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingIntegration2Component } from './lick-marketing-integration2.component';

@NgModule({
  declarations: [LickMarketingIntegration2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingIntegration2Component]
})
export class LickMarketingIntegration2Module { }
