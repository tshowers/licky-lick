import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickAppWidgetMaintenanceComponent } from './lick-app-widget-maintenance.component';

@NgModule({
  declarations: [LickAppWidgetMaintenanceComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LickAppWidgetMaintenanceComponent]
})
export class LickAppWidgetMaintenanceModule { }
