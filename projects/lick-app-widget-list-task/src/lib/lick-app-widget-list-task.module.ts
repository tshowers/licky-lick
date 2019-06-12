import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule} from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickAppWidgetListTaskComponent } from './lick-app-widget-list-task.component';

@NgModule({
  declarations: [LickAppWidgetListTaskComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    CountToModule
  ],
  exports: [LickAppWidgetListTaskComponent]
})
export class LickAppWidgetListTaskModule { }
