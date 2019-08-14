import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetLoginModule } from 'lick-app-widget-login';
import { LickAppWidgetLogoutModule } from 'lick-app-widget-logout';
import { LickAppWidgetSignupModule } from 'lick-app-widget-signup';
import { LickAppWidgetLockForgotPasswordModule } from 'lick-app-widget-lock-forgot-password';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, SignupComponent, ResetComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    LickAppWidgetLoginModule,
    LickAppWidgetLogoutModule,
    LickAppWidgetLockForgotPasswordModule,
    LickAppWidgetSignupModule
  ],
  exports: [LoginComponent, LogoutComponent, LogoutComponent, SignupComponent, ResetComponent]
})
export class LickMarketingSecurityModule {}
