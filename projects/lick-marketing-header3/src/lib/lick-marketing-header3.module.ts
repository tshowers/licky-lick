import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingHeader3Component } from './lick-marketing-header3.component';

@NgModule({
  declarations: [LickMarketingHeader3Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingHeader3Component]
})
export class LickMarketingHeader3Module { }
