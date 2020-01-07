import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { UiSwitchModule } from 'ngx-ui-switch';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickAppPageModule } from 'lick-app-page';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetMenuModule } from 'lick-app-widget-menu';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingSecurityModule } from 'lick-marketing-security';
import { LickAppWidgetChatPopupModule } from 'lick-app-widget-chat-popup';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';
import { LickAppWidgetBreadcrumbModule } from 'lick-app-widget-breadcrumb';
import { LickAppWidgetDataFooterModule } from 'lick-app-widget-data-footer';
import { LickAppWidgetProfileModule } from 'lick-app-widget-profile';
import { LickAppWidgetLeftSideMenuModule } from 'lick-app-widget-left-side-menu';
import { LickAppWidgetRightSideMenuModule } from 'lick-app-widget-right-side-menu';
import { LickAppWidgetUnderConstructionModule } from 'lick-app-widget-under-construction';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickMarketingAboutProduct5Module } from 'lick-marketing-about-product5';
import { LickMarketingAboutProduct6Module } from 'lick-marketing-about-product6';
import { LickMarketingAboutProduct7Module } from 'lick-marketing-about-product7';
import { LickMarketingLightbox1Module } from 'lick-marketing-lightbox1';
import { LickAppWidgetItemView1Module } from 'lick-app-widget-item-view1';
import { LickMarketingPrices2Module } from 'lick-marketing-prices2';
import { LickAppWidgetCardColumnModule } from 'lick-app-widget-card-column';
import { LickAppWidgetCardDeckModule } from 'lick-app-widget-card-deck';
import { LickAppWidgetShoppingCartModule } from 'lick-app-widget-shopping-cart';
import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { AutoFocusDirective } from './directives/auto-focus.directive';
import { NavComponent } from './nav/nav/nav.component';
import { ContextNavComponent } from './nav/context-nav/context-nav.component';

@NgModule({
  declarations: [AutoFocusDirective, NavComponent, ContextNavComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey, libraries: ["places"] }),
    NgbModule,
    UiSwitchModule,
    LickAppPageModule,
    LickDataModule,
    LickAppWidgetMenuModule,
    LickMarketingMenuModule,
    LickMarketingSecurityModule,
    LickAppWidgetChatPopupModule,
    LickAppWidgetFooterModule,
    LickAppWidgetBreadcrumbModule,
    LickAppWidgetDataFooterModule,
    LickAppWidgetProfileModule,
    LickAppWidgetLeftSideMenuModule,
    LickAppWidgetRightSideMenuModule,
    LickAppWidgetUnderConstructionModule,
    LickMarketingFaq2Module,
    LickAppWidgetItemView1Module,
    LickAppWidgetCardDeckModule,
    LickMarketingAboutProduct5Module,
    LickMarketingAboutProduct6Module,
    LickMarketingAboutProduct7Module,
    LickMarketingLightbox1Module,
    LickMarketingPrices2Module,
    LickAppWidgetShoppingCartModule,
    LickAppWidgetCardColumnModule
  ],
  exports: [
    AutoFocusDirective,
    NavComponent,
    FormsModule,
    RouterModule,
    AgmCoreModule,
    HttpClientModule,
    NgbModule,
    UiSwitchModule,
    LickAppPageModule,
    LickDataModule,
    LickAppWidgetMenuModule,
    LickMarketingMenuModule,
    LickMarketingSecurityModule,
    LickAppWidgetChatPopupModule,
    LickAppWidgetFooterModule,
    LickAppWidgetBreadcrumbModule,
    LickAppWidgetDataFooterModule,
    LickAppWidgetProfileModule,
    LickAppWidgetLeftSideMenuModule,
    LickAppWidgetRightSideMenuModule,
    LickAppWidgetUnderConstructionModule,
    LickMarketingFaq2Module,
    LickAppWidgetItemView1Module,
    LickAppWidgetCardColumnModule,
    LickAppWidgetCardDeckModule,
    LickMarketingAboutProduct5Module,
    LickMarketingAboutProduct6Module,
    LickMarketingAboutProduct7Module,
    LickMarketingLightbox1Module,
    LickMarketingPrices2Module,
    LickAppWidgetShoppingCartModule,
    ContextNavComponent
  ]
})
export class SharedModule { }
