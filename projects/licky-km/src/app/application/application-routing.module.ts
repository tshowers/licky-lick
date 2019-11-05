import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { NotificationModule } from './notification/notification.module';

import { TopicEditComponent } from './topic-edit/topic-edit.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { TopicDashboardComponent } from './topic-dashboard/topic-dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

import { TopicResolverService } from './services/topic-resolver.service';
import { TopicViewResolverService } from './services/topic-view-resolver.service';

const routes : Routes = [
  { path: 'notification', canLoad: [AuthGuard], children: [ {path: '', loadChildren: './notification/notification.module#NotificationModule'} ]},
  { path: 'topics', component: TopicListComponent, data: { title: 'Topics - Knowledge Management - 16 AHEAD' }},
  { path: 'topics/dashboard', component: TopicDashboardComponent, data: { title: 'Topic Dashboard - Knowledge Management - 16 AHEAD' }},
  { path: 'topics/new', resolve: { topic: TopicResolverService }, component: TopicEditComponent, data: { title: 'New Topic - Knowledge Management - 16 AHEAD' }},
  { path: 'topics/:id', resolve: { topic: TopicViewResolverService }, component: TopicViewComponent, data: { title: 'Topic - Knowledge Management - 16 AHEAD' }},
  { path: 'topics/:id/edit', resolve: { topic: TopicResolverService }, component: TopicEditComponent, data: { title: 'Edit Topic - Knowledge Management - 16 AHEAD' }},
  { path: 'profile', component: UserProfilePageComponent, data: { title: 'Profile - Knowledge Management - 16 AHEAD' }},
  { path: 'settings', component: UserSettingsComponent, data: { title: 'Settings - Knowledge Management - 16 AHEAD' }},
  { path: 'login', component: LoginPageComponent, data: { title: 'Login - Knowledge Management - 16 AHEAD' }},
  { path: 'sign-up', component: SignUpPageComponent, data: { title: 'Sign Up - Knowledge Management - 16 AHEAD' }},
  { path: 'reset', component: ResetPageComponent, data: { title: 'Password Reset - Knowledge Management - 16 AHEAD' }},
  { path: 'logout', component: LogoutPageComponent, data: { title: 'You Are Logged Out - Knowledge Management - 16 AHEAD' }},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    TopicResolverService,
    TopicViewResolverService,
  ]

})
export class ApplicationRoutingModule { }
