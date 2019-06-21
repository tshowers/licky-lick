import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickAppWidgetSignupComponent } from './lick-app-widget-signup.component';

@NgModule({
  declarations: [LickAppWidgetSignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LickAppWidgetSignupComponent]
})
export class LickAppWidgetSignupModule { }
