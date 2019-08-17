import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickyServicesModule } from 'licky-services';
import { LickDataModule } from 'lick-data';
import { LickAppPageComponent } from './lick-app-page.component';

@NgModule({
  declarations: [LickAppPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickyServicesModule,
    LickDataModule
  ],
  exports: [LickAppPageComponent]
})
export class LickAppPageModule { }
