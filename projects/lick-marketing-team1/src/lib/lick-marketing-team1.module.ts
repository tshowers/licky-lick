import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingTeam1Component } from './lick-marketing-team1.component';

@NgModule({
  declarations: [LickMarketingTeam1Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingTeam1Component]
})
export class LickMarketingTeam1Module { }
