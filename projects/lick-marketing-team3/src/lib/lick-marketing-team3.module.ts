import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingTeam3Component } from './lick-marketing-team3.component';

@NgModule({
  declarations: [LickMarketingTeam3Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingTeam3Component]
})
export class LickMarketingTeam3Module { }
