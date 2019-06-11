import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { LickMarketingHeader4Component } from './lick-marketing-header4.component';

@NgModule({
  declarations: [LickMarketingHeader4Component],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LickMarketingHeader4Component]
})
export class LickMarketingHeader4Module { }
