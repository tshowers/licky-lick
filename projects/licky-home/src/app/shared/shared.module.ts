import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickyServicesModule } from 'licky-services';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickyServicesModule,
    LickMarketingMenuModule
  ],
  exports: [ NavComponent ]
})
export class SharedModule { }
