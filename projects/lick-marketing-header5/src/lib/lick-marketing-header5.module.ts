import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingHeader5Component } from './lick-marketing-header5.component';

@NgModule({
  declarations: [LickMarketingHeader5Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingHeader5Component]
})
export class LickMarketingHeader5Module { }
