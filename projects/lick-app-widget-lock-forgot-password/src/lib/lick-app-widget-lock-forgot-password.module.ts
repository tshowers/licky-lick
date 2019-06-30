import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickAppWidgetLockForgotPasswordComponent } from './lick-app-widget-lock-forgot-password.component';

@NgModule({
  declarations: [LickAppWidgetLockForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  exports: [LickAppWidgetLockForgotPasswordComponent]
})
export class LickAppWidgetLockForgotPasswordModule { }
