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
  ]
})
export class LickyMarketingModule { }
