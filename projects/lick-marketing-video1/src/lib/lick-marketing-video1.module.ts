import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingVideo1Component } from './lick-marketing-video1.component';

@NgModule({
  declarations: [LickMarketingVideo1Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingVideo1Component]
})
export class LickMarketingVideo1Module { }
