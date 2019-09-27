import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { LickyServicesModule } from 'licky-services';
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
import { LickDataModule } from 'lick-data';
import { LickAppPageModule } from 'lick-app-page';
import { LickAppWidgetLeftSideMenuModule } from 'lick-app-widget-left-side-menu';
import { LickAppWidgetRightSideMenuModule } from 'lick-app-widget-right-side-menu';
import { LickAppWidgetStats15Module } from 'lick-app-widget-stats15';

import { NameDecriptionFilterPipe } from './filters/name-decription-filter.pipe';

import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent, NameDecriptionFilterPipe],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    LickDataModule,
    LickyServicesModule.forRoot(firebaseConfig),
    LickMarketingSecurityModule,
    LickMarketingMenuModule,
    LickAppWidgetTableDataModule,
    LickAppWidgetMenuModule,
    LickAppPageModule,
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
    RouterModule,
    HttpClientModule,
    LickDataModule,
    LickyServicesModule,
    LickMarketingSecurityModule,
    LickAppWidgetTableDataModule,
    LickAppWidgetMenuModule,
    LickAppPageModule,
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
