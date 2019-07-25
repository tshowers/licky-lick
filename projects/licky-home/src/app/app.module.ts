import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { SharedModule } from './shared/shared.module';

import { LickAppWidgetMaintenanceModule } from 'lick-app-widget-maintenance';
import { LickAppWidgetNotFoundModule } from 'lick-app-widget-not-found';
import { LickMarketingFooter2Module } from 'lick-marketing-footer2';
import { LickMarketingHeader4Module } from 'lick-marketing-header4';
import { LickMarketingSimplePageModule } from 'lick-marketing-simple-page';
import { LickMarketingSimpleHeaderModule } from 'lick-marketing-simple-header';
import { LickMarketingMenuModule } from 'lick-marketing-menu';

import { HomeMaintenanceComponent } from './home-maintenance/home-maintenance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';

import { environment } from '../environments/environment';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    HomeMaintenanceComponent,
    NotFoundComponent,
    HomePageComponent,
    PrivacyPageComponent,
    TermsPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LickyServicesModule.forRoot(firebaseConfig),
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'maintenance', component: HomeMaintenanceComponent},
      {path: 'privacy', component: PrivacyPageComponent},
      {path: 'terms', component: TermsPageComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    LickAppWidgetMaintenanceModule,
    LickAppWidgetNotFoundModule,
    LickMarketingFooter2Module,
    LickMarketingHeader4Module,
    LickMarketingSimplePageModule,
    LickMarketingSimpleHeaderModule,
    LickMarketingMenuModule,
    LickDataModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
