import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgwWowModule } from 'ngx-wow';
import { LickAppWidgetMaintenanceModule } from 'lick-app-widget-maintenance';
import { LickAppWidgetNotFoundModule } from 'lick-app-widget-not-found';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';

import { LickMarketingHeader5Module } from 'lick-marketing-header5';
import { LickMarketingFeatures4Module } from 'lick-marketing-features4';
import { LickMarketingAboutProduct7Module } from 'lick-marketing-about-product7';
import { LickMarketingParallax1Module } from 'lick-marketing-parallax1';
import { LickMarketingFaq3Module } from 'lick-marketing-faq3';
import { LickMarketingHowTo1Module } from 'lick-marketing-how-to1';
import { LickMarketingTeam1Module } from 'lick-marketing-team1';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingFooter2Module} from 'lick-marketing-footer2';
import { LickMarketingSimplePageModule } from 'lick-marketing-simple-page';
import { LickMarketingSimpleHeaderModule } from 'lick-marketing-simple-header';
import { LickMarketingContactUs1Module} from 'lick-marketing-contact-us1';
import { LickMarketingTryIt2Module } from 'lick-marketing-try-it2';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';

import { environment } from '../environments/environment';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomePageComponent,
    MaintenancePageComponent,
    PrivacyPageComponent,
    TermsPageComponent
  ],
  imports: [
    BrowserModule,
    NgwWowModule,
    LickyServicesModule.forRoot(firebaseConfig),
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'privacy', component: PrivacyPageComponent},
      {path: 'terms', component: TermsPageComponent},
      {path: 'maintenance', component: MaintenancePageComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    LickAppWidgetMaintenanceModule,
    LickMarketingHeader5Module,
    LickAppWidgetNotFoundModule,
    LickMarketingFeatures4Module,
    LickMarketingAboutProduct7Module,
    LickMarketingParallax1Module,
    LickMarketingFaq3Module,
    LickMarketingHowTo1Module,
    LickMarketingMenuModule,
    LickMarketingFooter2Module,
    LickMarketingSimplePageModule,
    LickMarketingSimpleHeaderModule,
    LickMarketingContactUs1Module,
    LickMarketingTeam1Module,
    LickDataModule,
    LickMarketingTryIt2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
