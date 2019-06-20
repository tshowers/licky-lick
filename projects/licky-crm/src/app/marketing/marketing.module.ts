import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MarketingRoutingModule } from './marketing-routing.module';

import { LickMarketingHeader3Module } from 'lick-marketing-header3';
import { LickMarketingFeatures2Module } from 'lick-marketing-features2';
import { LickMarketingAboutProduct3Module } from 'lick-marketing-about-product3';
import { LickMarketingParallax1Module } from 'lick-marketing-parallax1';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickMarketingHowTo1Module } from 'lick-marketing-how-to1';
import { LickMarketingTryIt2Module } from 'lick-marketing-try-it2';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingFooter1Module} from 'lick-marketing-footer1';
import { LickMarketingSimplePageModule } from 'lick-marketing-simple-page';
import { LickMarketingSimpleHeaderModule } from 'lick-marketing-simple-header';
import { LickMarketingContactUs1Module} from 'lick-marketing-contact-us1';

import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { RemoteAssetService } from './services/remote-asset.service';

@NgModule({
  declarations: [HomePageComponent, PrivacyPageComponent, ContactPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MarketingRoutingModule,
    LickMarketingHeader3Module,
    LickMarketingFeatures2Module,
    LickMarketingAboutProduct3Module,
    LickMarketingParallax1Module,
    LickMarketingFaq2Module,
    LickMarketingHowTo1Module,
    LickMarketingTryIt2Module,
    LickMarketingMenuModule,
    LickMarketingFooter1Module,
    LickMarketingSimplePageModule,
    LickMarketingSimpleHeaderModule,
    LickMarketingContactUs1Module
  ],
  providers: [RemoteAssetService]
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
