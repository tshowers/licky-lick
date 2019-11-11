import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MarketingRoutingModule } from './marketing-routing.module';

import { LickMarketingCarouselModule } from 'lick-marketing-carousel';
import { LickMarketingPrices2Module } from 'lick-marketing-prices2';
import { LickMarketingFaq1Module } from 'lick-marketing-faq1';
import { LickMarketingVideo1Module } from 'lick-marketing-video1';
import { LickMarketingFeatures1Module } from 'lick-marketing-features1';
import { LickMarketingAboutProduct7Module } from 'lick-marketing-about-product7';
import { LickMarketingReviews2Module } from 'lick-marketing-reviews2';
import { LickMarketingLightbox1Module } from 'lick-marketing-lightbox1';
import { LickMarketingFooter2Module} from 'lick-marketing-footer2';

import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [HomePageComponent, PrivacyPageComponent, TermsPageComponent, ContactPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MarketingRoutingModule,
    LickMarketingPrices2Module,
    LickMarketingFaq1Module,
    LickMarketingVideo1Module,
    LickMarketingFeatures1Module,
    LickMarketingAboutProduct7Module,
    LickMarketingReviews2Module,
    LickMarketingLightbox1Module,
    LickMarketingCarouselModule,
    LickMarketingFooter2Module
  ]
})
export class MarketingModule { }

@NgModule({})
export class LickMarketingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MarketingModule,
      providers: []
    }

  }
}
