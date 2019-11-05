import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickAppPageModule } from 'lick-app-page';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetMenuModule } from 'lick-app-widget-menu';
import { LickAppWidgetTableDataModule } from 'lick-app-widget-table-data';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingSecurityModule } from 'lick-marketing-security';
import { LickAppWidgetChatPopupModule } from 'lick-app-widget-chat-popup';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';
import { LickAppWidgetBreadcrumbModule } from 'lick-app-widget-breadcrumb';
import { LickAppWidgetDataFooterModule } from 'lick-app-widget-data-footer';
import { LickAppWidgetProfileModule} from 'lick-app-widget-profile';
import { LickAppWidgetLeftSideMenuModule } from 'lick-app-widget-left-side-menu';
import { LickAppWidgetRightSideMenuModule } from 'lick-app-widget-right-side-menu';
import { LickAppWidgetUnderConstructionModule } from 'lick-app-widget-under-construction';
import { LickMarketingFaq2Module} from 'lick-marketing-faq2';

import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { AutoFocusDirective } from './directives/auto-focus.directive';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AutoFocusDirective, NavComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey, libraries:["places"]}),
    NgbModule,
    LickAppPageModule,
    LickDataModule,
    LickAppWidgetMenuModule,
    LickAppWidgetTableDataModule,
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
  ],
  exports: [
    AutoFocusDirective,
    NavComponent,
    FormsModule,
    RouterModule,
    AgmCoreModule,
    HttpClientModule,
    NgbModule,
    LickAppPageModule,
    LickDataModule,
    LickAppWidgetMenuModule,
    LickAppWidgetTableDataModule,
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
      LickMarketingFaq2Module
  ]
})
export class SharedModule { }
