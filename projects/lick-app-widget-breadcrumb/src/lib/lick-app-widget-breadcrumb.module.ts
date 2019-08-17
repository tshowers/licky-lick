import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetBreadcrumbComponent } from './lick-app-widget-breadcrumb.component';

@NgModule({
  declarations: [LickAppWidgetBreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LickAppWidgetBreadcrumbComponent]
})
export class LickAppWidgetBreadcrumbModule { }
