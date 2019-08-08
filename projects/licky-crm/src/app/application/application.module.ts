import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { LickMarketingSecurityModule } from 'lick-marketing-security';
import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [LoginPageComponent, SignUpPageComponent, ResetPageComponent, LogoutPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    LickMarketingSecurityModule.forRoot(firebaseConfig),
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
