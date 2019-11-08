import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountToModule } from 'angular-count-to';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetListArticleSummaryComponent } from './lick-app-widget-list-article-summary.component';
import { ImageCheckPipe } from './pipes/image-check.pipe';

@NgModule({
  declarations: [LickAppWidgetListArticleSummaryComponent, ImageCheckPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CountToModule,
    NgbModule,
    LickDataModule
  ],
  exports: [LickAppWidgetListArticleSummaryComponent]
})
export class LickAppWidgetListArticleSummaryModule { }
