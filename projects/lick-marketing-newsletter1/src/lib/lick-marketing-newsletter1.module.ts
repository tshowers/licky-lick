import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { LickMarketingNewsletter1Component } from './lick-marketing-newsletter1.component';

@NgModule({
  declarations: [LickMarketingNewsletter1Component],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LickMarketingNewsletter1Component]
})
export class LickMarketingNewsletter1Module { }
