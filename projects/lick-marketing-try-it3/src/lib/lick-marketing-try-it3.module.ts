import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingTryIt3Component } from './lick-marketing-try-it3.component';

@NgModule({
  declarations: [LickMarketingTryIt3Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingTryIt3Component]
})
export class LickMarketingTryIt3Module { }
