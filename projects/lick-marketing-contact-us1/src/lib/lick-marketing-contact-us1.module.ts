import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickMarketingContactUs1Component } from './lick-marketing-contact-us1.component';

@NgModule({
  declarations: [LickMarketingContactUs1Component],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LickMarketingContactUs1Component]
})
export class LickMarketingContactUs1Module { }
