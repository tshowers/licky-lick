import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickAppWidgetLoginComponent } from './lick-app-widget-login.component';

@NgModule({
  declarations: [LickAppWidgetLoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  exports: [LickAppWidgetLoginComponent]
})
export class LickAppWidgetLoginModule { }
