import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LickAppWidgetFindComponent } from './lick-app-widget-find.component';

@NgModule({
  declarations: [LickAppWidgetFindComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  exports: [LickAppWidgetFindComponent]
})
export class LickAppWidgetFindModule { }
