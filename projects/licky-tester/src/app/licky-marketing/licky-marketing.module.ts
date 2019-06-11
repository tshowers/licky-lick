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

import { LickMarketingContactUs1Module} from 'lick-marketing-contact-us1';

import { LickMarketingFaq1Module } from 'lick-marketing-faq1';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickMarketingFaq3Module } from 'lick-marketing-faq3';

import { LickMarketingFeatures1Module} from 'lick-marketing-features1';
import { LickMarketingFeatures2Module} from 'lick-marketing-features2';
import { LickMarketingFeatures3Module} from 'lick-marketing-features3';
import { LickMarketingFeatures4Module} from 'lick-marketing-features4';
import { LickMarketingFeatures5Module} from 'lick-marketing-features5';

import { LickMarketingFooter1Module} from 'lick-marketing-footer1';

import { LickMarketingHowTo1Module} from 'lick-marketing-how-to1';

@NgModule({
  declarations: [HeaderWidgetsComponent, GeneralWidgetsComponent],
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

    LickMarketingHowTo1Module,
  ]
})
export class LickyMarketingModule { }
