import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickyMarketingRoutingModule } from './licky-marketing-routing.module';
import { HeaderWidgetsComponent } from './header-widgets/header-widgets.component';
import { GeneralWidgetsComponent } from './general-widgets/general-widgets.component';
import { LickDataModule } from 'lick-data';

import { LickMarketingAboutProduct1Module } from 'lick-marketing-about-product1';
import { LickMarketingAboutProduct2Module } from 'lick-marketing-about-product2';
import { LickMarketingAboutProduct3Module } from 'lick-marketing-about-product3';
import { LickMarketingAboutProduct4Module } from 'lick-marketing-about-product4';
import { LickMarketingAboutProduct5Module } from 'lick-marketing-about-product5';
import { LickMarketingAboutProduct6Module } from 'lick-marketing-about-product6';
import { LickMarketingAboutProduct7Module } from 'lick-marketing-about-product7';

import { LickMarketingContactUs1Module } from 'lick-marketing-contact-us1';

import { LickMarketingFaq1Module } from 'lick-marketing-faq1';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickMarketingFaq3Module } from 'lick-marketing-faq3';

import { LickMarketingFeatures1Module } from 'lick-marketing-features1';
import { LickMarketingFeatures2Module } from 'lick-marketing-features2';
import { LickMarketingFeatures3Module } from 'lick-marketing-features3';
import { LickMarketingFeatures4Module } from 'lick-marketing-features4';
import { LickMarketingFeatures5Module } from 'lick-marketing-features5';

import { LickMarketingFooter1Module } from 'lick-marketing-footer1';

import { LickMarketingHeader1Module } from 'lick-marketing-header1';
import { LickMarketingHeader2Module } from 'lick-marketing-header2';
import { LickMarketingHeader3Module } from 'lick-marketing-header3';
import { LickMarketingHeader4Module } from 'lick-marketing-header4';
import { LickMarketingHeader5Module } from 'lick-marketing-header5';

import { LickMarketingHowTo1Module } from 'lick-marketing-how-to1';

import { LickMarketingIntegration1Module } from 'lick-marketing-integration1';
import { LickMarketingIntegration2Module } from 'lick-marketing-integration2';

import { LickMarketingLatestPost1Module } from 'lick-marketing-latest-post1';
import { LickMarketingLatestPost2Module } from 'lick-marketing-latest-post2';

import { LickMarketingNewsletter1Module } from 'lick-marketing-newsletter1';

import { LickMarketingParallax1Module } from 'lick-marketing-parallax1';

import { LickMarketingPrices1Module } from 'lick-marketing-prices1';
import { LickMarketingPrices2Module } from 'lick-marketing-prices2';

import { LickMarketingReviews1Module } from 'lick-marketing-reviews1';
import { LickMarketingReviews2Module } from 'lick-marketing-reviews2';
import { LickMarketingReviews3Module } from 'lick-marketing-reviews3';

import { LickMarketingTeam1Module } from 'lick-marketing-team1';
import { LickMarketingTeam2Module } from 'lick-marketing-team2';
import { LickMarketingTeam3Module } from 'lick-marketing-team3';

import { LickMarketingTryIt1Module } from 'lick-marketing-try-it1';
import { LickMarketingTryIt2Module } from 'lick-marketing-try-it2';
import { LickMarketingTryIt3Module } from 'lick-marketing-try-it3';

import { LickMarketingVideo1Module } from 'lick-marketing-video1';
import { LickMarketingVideo2Module } from 'lick-marketing-video2';

import { LickMarketingCarouselModule } from 'lick-marketing-carousel';
import { LickMarketingSimpleHeaderModule } from 'lick-marketing-simple-header';
import { LickMarketingSimplePageModule } from 'lick-marketing-simple-page';
import { MiscellaneousWidgetsComponent } from './miscellaneous-widgets/miscellaneous-widgets.component';


@NgModule({
  declarations: [HeaderWidgetsComponent, GeneralWidgetsComponent, MiscellaneousWidgetsComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickyMarketingRoutingModule,
    LickDataModule,
    LickMarketingAboutProduct1Module,
    LickMarketingAboutProduct2Module,
    LickMarketingAboutProduct3Module,
    LickMarketingAboutProduct4Module,
    LickMarketingAboutProduct5Module,
    LickMarketingAboutProduct6Module,
    LickMarketingAboutProduct7Module,

    LickMarketingContactUs1Module,

    LickMarketingFaq1Module,
    LickMarketingFaq2Module,
    LickMarketingFaq3Module,

    LickMarketingFeatures1Module,
    LickMarketingFeatures2Module,
    LickMarketingFeatures3Module,
    LickMarketingFeatures4Module,
    LickMarketingFeatures5Module,

    LickMarketingFooter1Module,

    LickMarketingHeader1Module,
    LickMarketingHeader2Module,
    LickMarketingHeader3Module,
    LickMarketingHeader4Module,
    LickMarketingHeader5Module,

    LickMarketingHowTo1Module,

    LickMarketingIntegration1Module,
    LickMarketingIntegration2Module,

    LickMarketingLatestPost1Module,
    LickMarketingLatestPost2Module,

    LickMarketingNewsletter1Module,
    LickMarketingParallax1Module,

    LickMarketingPrices1Module,
    LickMarketingPrices2Module,

    LickMarketingReviews1Module,
    LickMarketingReviews2Module,
    LickMarketingReviews3Module,

    LickMarketingTeam1Module,
    LickMarketingTeam2Module,
    LickMarketingTeam3Module,

    LickMarketingTryIt1Module,
    LickMarketingTryIt2Module,
    LickMarketingTryIt3Module,

    LickMarketingVideo1Module,
    LickMarketingVideo2Module,

    LickMarketingCarouselModule,
    LickMarketingSimpleHeaderModule,
    LickMarketingSimplePageModule
  ]
})
export class LickyMarketingModule { }
