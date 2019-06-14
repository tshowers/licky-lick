import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingMenuComponent } from './lick-marketing-menu.component';

@NgModule({
  declarations: [LickMarketingMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickMarketingMenuComponent]
})
export class LickMarketingMenuModule { }
