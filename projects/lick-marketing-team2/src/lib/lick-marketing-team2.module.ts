import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickMarketingTeam2Component } from './lick-marketing-team2.component';

@NgModule({
  declarations: [LickMarketingTeam2Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule
  ],
  exports: [LickMarketingTeam2Component]
})
export class LickMarketingTeam2Module { }
