import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { NewsPickerComponent } from './news-picker/news-picker.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsLoginComponent } from './news-login/news-login.component';
import { NewsMaintenanceComponent } from './news-maintenance/news-maintenance.component';
import { NewsSignupComponent } from './news-signup/news-signup.component';
import { NewsForgotPasswordComponent } from './news-forgot-password/news-forgot-password.component';
import { NewsScreenLockComponent } from './news-screen-lock/news-screen-lock.component';
import { NewsLogoutComponent } from './news-logout/news-logout.component';
import { NewsReaderComponent} from './news-reader/news-reader.component';

const routes : Routes = [
  { path: 'login', component: NewsLoginComponent, data: { title: 'Login - News - 16 AHEAD' }},
  { path: 'lock', component: NewsScreenLockComponent, data: { title: 'Lock Screen - News - 16 AHEAD' }},
  { path: 'logout', component: NewsLogoutComponent, data: { title: 'Logout - News - 16 AHEAD' }},
  { path: 'maintenance', component: NewsMaintenanceComponent, data: { title: 'Maintenance - News - 16 AHEAD' }},
  { path: 'sign-up', component: NewsSignupComponent, data: { title: 'Sign Up - News - 16 AHEAD' }},
  { path: 'forgot-password', component: NewsForgotPasswordComponent, data: { title: 'Forgot Password - News - 16 AHEAD' }},
  { path: 'news', canActivate: [AuthGuard], component: NewsViewComponent, data: { title: 'News - 16 AHEAD' }},
  { path: 'news-selector', canActivate: [AuthGuard], component: NewsPickerComponent, data: { title: 'News Selector - 16 AHEAD' }},
  { path: 'news-reader', canActivate: [AuthGuard], component: NewsReaderComponent, data: { title: 'News Reader - 16 AHEAD' }},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
