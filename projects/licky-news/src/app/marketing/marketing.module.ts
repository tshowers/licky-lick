import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarketingRoutingModule } from './marketing-routing.module';

import { LickMarketingHeader2Module } from 'lick-marketing-header2';
import { LickMarketingFeatures1Module } from 'lick-marketing-features1';
import { LickMarketingAboutProduct4Module } from 'lick-marketing-about-product4';
import { LickMarketingParallax1Module } from 'lick-marketing-parallax1';
import { LickMarketingFaq1Module } from 'lick-marketing-faq1';
import { LickMarketingHowTo1Module } from 'lick-marketing-how-to1';
import { LickMarketingTryIt1Module } from 'lick-marketing-try-it1';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingFooter1Module } from 'lick-marketing-footer1';
import { LickMarketingFooter2Module } from 'lick-marketing-footer2';
import { LickMarketingSimplePageModule } from 'lick-marketing-simple-page';
import { LickMarketingSimpleHeaderModule } from 'lick-marketing-simple-header';
import { LickMarketingContactUs1Module } from 'lick-marketing-contact-us1';
import { LickAppWidgetMessageModule } from 'lick-app-widget-message';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MessagePageComponent } from './message-page/message-page.component';

@NgModule({
  declarations: [HomePageComponent, PrivacyPageComponent, ContactPageComponent, MessagePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarketingRoutingModule,

    LickMarketingHeader2Module,
    LickMarketingFeatures1Module,
    LickMarketingAboutProduct4Module,
    LickMarketingParallax1Module,
    LickMarketingFaq1Module,
    LickMarketingHowTo1Module,
    LickMarketingTryIt1Module,
    LickMarketingMenuModule,
    LickMarketingFooter1Module,
    LickMarketingSimplePageModule,
    LickMarketingSimpleHeaderModule,
    LickMarketingContactUs1Module,
    LickMarketingFooter2Module,
    LickAppWidgetMessageModule
  ]
})
export class MarketingModule { }
