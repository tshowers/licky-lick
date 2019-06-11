import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingHeader4Component } from './lick-marketing-header4.component';

@NgModule({
  declarations: [LickMarketingHeader4Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingHeader4Component]
})
export class LickMarketingHeader4Module { }
