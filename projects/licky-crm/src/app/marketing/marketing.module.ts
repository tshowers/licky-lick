import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarketingRoutingModule } from './marketing-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LickMarketingHeader3Module } from 'lick-marketing-header3';
import { LickMarketingFeatures2Module } from 'lick-marketing-features2';
import { LickMarketingAboutProduct3Module } from 'lick-marketing-about-product3';
import { LickMarketingParallax1Module } from 'lick-marketing-parallax1';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickMarketingHowTo1Module } from 'lick-marketing-how-to1';
import { LickMarketingTryIt2Module } from 'lick-marketing-try-it2';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingFooter1Module} from 'lick-marketing-footer1';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarketingRoutingModule,
    LickMarketingHeader3Module,
    LickMarketingFeatures2Module,
    LickMarketingAboutProduct3Module,
    LickMarketingParallax1Module,
    LickMarketingFaq2Module,
    LickMarketingHowTo1Module,
    LickMarketingTryIt2Module,
    LickMarketingMenuModule,
    LickMarketingFooter1Module
  ]
})
export class MarketingModule { }
