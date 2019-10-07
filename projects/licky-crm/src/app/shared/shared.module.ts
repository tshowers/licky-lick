import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LickDataModule } from 'lick-data';
import { LickAppPageModule } from 'lick-app-page';
import { LickAppWidgetMenuModule } from 'lick-app-widget-menu';
import { LickAppWidgetTableDataModule } from 'lick-app-widget-table-data';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingSecurityModule } from 'lick-marketing-security';
import { LickAppWidgetChatPopupModule } from 'lick-app-widget-chat-popup';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';
import { LickAppWidgetBreadcrumbModule } from 'lick-app-widget-breadcrumb';
import { LickAppWidgetDataFooterModule } from 'lick-app-widget-data-footer';
import { LickAppWidgetProfileModule} from 'lick-app-widget-profile';
import { LickAppWidgetStats3Module } from 'lick-app-widget-stats3';
import { LickAppWidgetStats4Module } from 'lick-app-widget-stats4';
import { LickAppWidgetStats6Module } from 'lick-app-widget-stats6';
import { LickAppWidgetStats9Module } from 'lick-app-widget-stats9';
import { LickAppWidgetCardDeckModule } from 'lick-app-widget-card-deck';
import { LickAppWidgetStats11Module } from 'lick-app-widget-stats11';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickAppWidgetLeftSideMenuModule } from 'lick-app-widget-left-side-menu';
import { LickAppWidgetRightSideMenuModule } from 'lick-app-widget-right-side-menu';
import { LickAppWidgetStats15Module } from 'lick-app-widget-stats15';

import { NameDecriptionFilterPipe } from './filters/name-decription-filter.pipe';

import { NavComponent } from './nav/nav.component';
import { ContextNavComponent } from './nav/context-nav/context-nav.component';

import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

// Repetition is reduced by having SharedModule re-export
// CommonModule, FormsModule etc. so that importers of SharedModule get
// CommonModule, FormsModule etc. for free.

@NgModule({
  declarations: [NavComponent, NameDecriptionFilterPipe, ContextNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey, libraries:["places"]}),
    LickAppPageModule,
    LickDataModule,
    LickMarketingSecurityModule,
    LickMarketingMenuModule,
    LickAppWidgetTableDataModule,
    LickAppWidgetMenuModule,
    LickAppWidgetLeftSideMenuModule,
    LickAppWidgetRightSideMenuModule,
    LickAppWidgetStats15Module,
    LickAppWidgetChatPopupModule,
    LickAppWidgetFooterModule,
    LickAppWidgetBreadcrumbModule,
    FormsModule,
    LickAppWidgetProfileModule,
    LickAppWidgetDataFooterModule,
    LickAppWidgetStats3Module,
    LickAppWidgetStats4Module,
    LickAppWidgetStats6Module,
    LickAppWidgetStats9Module,
    LickAppWidgetStats11Module,
    LickAppWidgetCardDeckModule,
    LickMarketingFaq2Module
  ],
  exports: [
    NavComponent,
    ContextNavComponent,
    RouterModule,
    HttpClientModule,
    LickAppPageModule,
    AgmCoreModule,
    LickDataModule,
    LickMarketingSecurityModule,
    LickAppWidgetTableDataModule,
    LickAppWidgetMenuModule,
    LickAppWidgetLeftSideMenuModule,
    LickAppWidgetRightSideMenuModule,
    LickAppWidgetStats15Module,
    LickAppWidgetChatPopupModule,
    LickAppWidgetFooterModule,
    LickAppWidgetBreadcrumbModule,
    NgbModule,
    FormsModule,
    LickAppWidgetDataFooterModule,
    LickAppWidgetProfileModule,
    LickAppWidgetStats3Module,
    LickAppWidgetStats4Module,
    LickAppWidgetStats6Module,
    LickAppWidgetStats9Module,
    LickAppWidgetStats11Module,
    LickAppWidgetCardDeckModule,
    LickMarketingFaq2Module,
    NameDecriptionFilterPipe
  ]
})
export class SharedModule { }
