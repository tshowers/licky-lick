import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationRoutingModule } from './application-routing.module';
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

import { LickAppWidgetStats8Module} from 'lick-app-widget-stats8';
import { LickAppWidgetStats7Module} from 'lick-app-widget-stats7';
import { LickAppWidgetStats13Module} from 'lick-app-widget-stats13';
import { LickAppWidgetStats15Module} from 'lick-app-widget-stats15';
import { LickAppWidgetStats9Module} from 'lick-app-widget-stats9';
import { LickAppWidgetListContentModule} from 'lick-app-widget-list-content';

@NgModule({
  declarations: [TopicEditComponent, TopicListComponent, TopicViewComponent, TopicDashboardComponent, LoginPageComponent, LogoutPageComponent, SignUpPageComponent, ResetPageComponent, UserProfilePageComponent, UserSettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationRoutingModule,
    LickAppWidgetStats7Module,
    LickAppWidgetStats8Module,
    LickAppWidgetStats9Module,
    LickAppWidgetStats13Module,
    LickAppWidgetStats15Module,
    LickAppWidgetListContentModule
  ]
})
export class ApplicationModule { }
