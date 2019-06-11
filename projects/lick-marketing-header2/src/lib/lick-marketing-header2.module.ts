import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingHeader2Component } from './lick-marketing-header2.component';

@NgModule({
  declarations: [LickMarketingHeader2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingHeader2Component]
})
export class LickMarketingHeader2Module { }
