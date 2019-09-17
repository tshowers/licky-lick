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


import { LickDataModule } from 'lick-data';
import { LickAppPageModule } from 'lick-app-page';
import { LickAppWidgetLeftSideMenuModule } from 'lick-app-widget-left-side-menu';
import { LickAppWidgetRightSideMenuModule } from 'lick-app-widget-right-side-menu';
import { LickAppWidgetStats15Module } from 'lick-app-widget-stats15';
import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
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
    LickAppWidgetDataFooterModule
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
    LickAppWidgetProfileModule
  ]
})
export class SharedModule { }
