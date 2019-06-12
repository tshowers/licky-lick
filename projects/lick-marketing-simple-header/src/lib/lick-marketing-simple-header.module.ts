import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingSimpleHeaderComponent } from './lick-marketing-simple-header.component';

@NgModule({
  declarations: [LickMarketingSimpleHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingSimpleHeaderComponent]
})
export class LickMarketingSimpleHeaderModule { }
