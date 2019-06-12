import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule} from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetListBadgesComponent } from './lick-app-widget-list-badges.component';

@NgModule({
  declarations: [LickAppWidgetListBadgesComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    CountToModule
  ],
  exports: [LickAppWidgetListBadgesComponent]
})
export class LickAppWidgetListBadgesModule { }
