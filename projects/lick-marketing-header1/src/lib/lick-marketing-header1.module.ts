import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingHeader1Component } from './lick-marketing-header1.component';

@NgModule({
  declarations: [LickMarketingHeader1Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingHeader1Component]
})
export class LickMarketingHeader1Module { }
