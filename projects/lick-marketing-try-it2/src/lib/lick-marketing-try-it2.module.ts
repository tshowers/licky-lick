import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingTryIt2Component } from './lick-marketing-try-it2.component';

@NgModule({
  declarations: [LickMarketingTryIt2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingTryIt2Component]
})
export class LickMarketingTryIt2Module { }
