import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { ContactModule } from './contact/contact.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PageTemplateComponent } from './page-template/page-template.component';

const routes : Routes = [
  { path: 'contacts', canLoad: [AuthGuard], children: [ {path: '', loadChildren: './contact/contact.module#ContactModule'} ]},
  { path: 'template', component: PageTemplateComponent, data: { title: 'Template - CRM - 16 AHEAD' }},
  { path: 'profile', component: UserProfileComponent, data: { title: 'Profile - CRM - 16 AHEAD' }},
  { path: 'settings', component: UserSettingsComponent, data: { title: 'Settings - CRM - 16 AHEAD' }},
  { path: 'login', component: LoginPageComponent, data: { title: 'Login - CRM - 16 AHEAD' }},
  { path: 'sign-up', component: SignUpPageComponent, data: { title: 'Sign Up - CRM - 16 AHEAD' }},
  { path: 'reset', component: ResetPageComponent, data: { title: 'Password Reset - CRM - 16 AHEAD' }},
  { path: 'logout', component: LogoutPageComponent, data: { title: 'You Are Logged Out - CRM - 16 AHEAD' }},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
