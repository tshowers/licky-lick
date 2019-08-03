import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LightboxModule } from 'ngx-lightbox';
import { LickMarketingLightbox1Component } from './lick-marketing-lightbox1.component';

@NgModule({
  declarations: [LickMarketingLightbox1Component],
  imports: [
    CommonModule,
    RouterModule,
    LightboxModule,
  ],
  exports: [LickMarketingLightbox1Component]
})
export class LickMarketingLightbox1Module { }
