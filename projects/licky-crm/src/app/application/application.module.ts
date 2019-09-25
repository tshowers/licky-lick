import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationRoutingModule } from './application-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PageTemplateComponent } from './page-template/page-template.component';


@NgModule({
  declarations: [LoginPageComponent, SignUpPageComponent, ResetPageComponent, LogoutPageComponent, UserProfileComponent, UserSettingsComponent, PageTemplateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
