import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MarketingRoutingModule } from './marketing-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';

import { LickMarketingHeader1Module } from 'lick-marketing-header1';
import { LickMarketingFeatures5Module } from 'lick-marketing-features5';
import { LickMarketingAboutProduct4Module} from 'lick-marketing-about-product4';
import { LickMarketingFooter2Module} from 'lick-marketing-footer2';
import { LickMarketingTryIt2Module} from 'lick-marketing-try-it2';
import { LickMarketingFaq2Module} from 'lick-marketing-faq2';
import { LickMarketingHowTo1Module} from 'lick-marketing-how-to1';
import { LickMarketingSimpleHeaderModule } from 'lick-marketing-simple-header';
import { LickMarketingSimplePageModule } from 'lick-marketing-simple-page';
import { LickMarketingContactUs1Module} from 'lick-marketing-contact-us1';

@NgModule({
  declarations: [ContactPageComponent, HomePageComponent, PrivacyPageComponent, TermsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MarketingRoutingModule,
    LickMarketingHeader1Module,
    LickMarketingAboutProduct4Module,
    LickMarketingFeatures5Module,
    LickMarketingHowTo1Module,
    LickMarketingTryIt2Module,
    LickMarketingFooter2Module,
    LickMarketingFaq2Module,
    LickMarketingSimpleHeaderModule,
    LickMarketingContactUs1Module,
    LickMarketingSimplePageModule
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
