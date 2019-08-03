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
import { LickMarketingFeatures5Module } from 'lick-marketing-features5';
import { LickMarketingFeatures3Module } from 'lick-marketing-features3';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickMarketingParallax1Module } from 'lick-marketing-parallax1';
import { LickMarketingAboutProduct4Module} from 'lick-marketing-about-product4';
import { LickMarketingAboutProduct5Module} from 'lick-marketing-about-product5';
import { LickMarketingHowTo1Module } from 'lick-marketing-how-to1';
import { LickMarketingTryIt2Module } from 'lick-marketing-try-it2';
import { LickMarketingLightbox1Module } from 'lick-marketing-lightbox1';
import { HomeMaintenanceComponent } from './home-maintenance/home-maintenance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';

import { environment } from '../environments/environment';
import { ProductPageComponent } from './product-page/product-page.component';
import { FactoryPageComponent } from './factory-page/factory-page.component';


export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    HomeMaintenanceComponent,
    NotFoundComponent,
    HomePageComponent,
    PrivacyPageComponent,
    TermsPageComponent,
    ProductPageComponent,
    FactoryPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LickyServicesModule.forRoot(firebaseConfig),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, data: { title: 'Home Page - 16 AHEAD' } },
      { path: 'products', component: ProductPageComponent, data: { title: 'Products - 16 AHEAD' } },
      { path: 'factory', component: FactoryPageComponent, data: { title: 'Factory - 16 AHEAD' } },
      { path: 'maintenance', component: HomeMaintenanceComponent, data: { title: 'Site Maintenance - 16 AHEAD' } },
      { path: 'privacy', component: PrivacyPageComponent, data: { title: 'Privacy Policy - 16 AHEAD' } },
      { path: 'terms', component: TermsPageComponent, data: { title: 'Terms of Service - 16 AHEAD' } },
      { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found - 16 AHEAD' } }
    ]),
    LickAppWidgetMaintenanceModule,
    LickAppWidgetNotFoundModule,
    LickMarketingFooter2Module,
    LickMarketingHeader4Module,
    LickMarketingSimplePageModule,
    LickMarketingSimpleHeaderModule,
    LickMarketingMenuModule,
    LickDataModule,
    LickMarketingParallax1Module,
    LickMarketingFeatures5Module,
    LickMarketingFeatures3Module,
    LickMarketingFaq2Module,
    LickMarketingAboutProduct5Module,
    LickMarketingAboutProduct4Module,
    LickMarketingHowTo1Module,
    LickMarketingTryIt2Module,
    LickMarketingLightbox1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
