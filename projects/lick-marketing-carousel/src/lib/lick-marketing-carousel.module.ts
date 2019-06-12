import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { LickDataModule } from 'lick-data';
import { LickMarketingCarouselComponent } from './lick-marketing-carousel.component';

@NgModule({
  declarations: [LickMarketingCarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    OwlModule,
    LickDataModule
  ],
  exports: [LickMarketingCarouselComponent]
})
export class LickMarketingCarouselModule { }
