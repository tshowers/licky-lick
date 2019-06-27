import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApplicationRoutingModule } from './application-routing.module';

import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetSignupModule} from 'lick-app-widget-signup';
import { LickAppWidgetMaintenanceModule} from 'lick-app-widget-maintenance';
import { LickAppWidgetLoginModule} from 'lick-app-widget-login';
import { LickAppWidgetLockScreenModule } from 'lick-app-widget-lock-screen';
import { LickAppWidgetLockForgotPasswordModule } from 'lick-app-widget-lock-forgot-password';
import { LickAppWidgetLogoutModule} from 'lick-app-widget-logout';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickAppWidgetPost1Module} from 'lick-app-widget-post1';
import { LickAppWidgetPost2Module} from 'lick-app-widget-post2';
import { LickAppWidgetPost3Module} from 'lick-app-widget-post3';
import { LickAppWidgetPost4Module} from 'lick-app-widget-post4';
import { LickMarketingLatestPost1Module} from 'lick-marketing-latest-post1';
import { LickMarketingLatestPost2Module} from 'lick-marketing-latest-post2';
import { LickAppWidgetSpinnerModule} from 'lick-app-widget-spinner';

import { NewsPickerComponent } from './news-picker/news-picker.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsLoginComponent } from './news-login/news-login.component';
import { NewsMaintenanceComponent } from './news-maintenance/news-maintenance.component';
import { NewsSignupComponent } from './news-signup/news-signup.component';
import { NewsForgotPasswordComponent } from './news-forgot-password/news-forgot-password.component';
import { NewsScreenLockComponent } from './news-screen-lock/news-screen-lock.component';
import { NewsLogoutComponent } from './news-logout/news-logout.component';


import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [NewsPickerComponent, NewsViewComponent, NewsLoginComponent, NewsMaintenanceComponent, NewsSignupComponent, NewsForgotPasswordComponent, NewsScreenLockComponent, NewsLogoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ApplicationRoutingModule,
    LickAppWidgetSignupModule,
    LickAppWidgetMaintenanceModule,
    LickAppWidgetLoginModule,
    LickAppWidgetLockScreenModule,
    LickAppWidgetLockForgotPasswordModule,
    LickAppWidgetLogoutModule,
    LickMarketingMenuModule,
    LickAppWidgetPost1Module,
    LickAppWidgetPost2Module,
    LickAppWidgetPost3Module,
    LickAppWidgetPost4Module,
    LickMarketingLatestPost1Module,
    LickMarketingLatestPost2Module,
    LickAppWidgetSpinnerModule,
    LickyServicesModule.forRoot(firebaseConfig)

  ]
})
export class ApplicationModule { }
