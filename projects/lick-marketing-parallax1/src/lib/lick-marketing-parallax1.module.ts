import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingParallax1Component } from './lick-marketing-parallax1.component';

@NgModule({
  declarations: [LickMarketingParallax1Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingParallax1Component]
})
export class LickMarketingParallax1Module { }
