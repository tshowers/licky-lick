import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetNoDataModule } from 'lick-app-widget-no-data';
import { LickAppWidgetArticleComponent } from './lick-app-widget-article.component';

@NgModule({
  declarations: [LickAppWidgetArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    LickAppWidgetNoDataModule
  ],
  exports: [LickAppWidgetArticleComponent]
})
export class LickAppWidgetArticleModule { }
