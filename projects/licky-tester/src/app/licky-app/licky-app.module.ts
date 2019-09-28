import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickyAppRoutingModule } from './licky-app-routing.module';
import { StatWidgetsComponent } from './stat-widgets/stat-widgets.component';
import { GeneralWidgetsComponent } from './general-widgets/general-widgets.component';
import { LickDataModule } from 'lick-data';

import { LickAppWidgetCardDeckModule } from 'lick-app-widget-card-deck';
import { LickAppWidgetCardGroupModule } from 'lick-app-widget-card-group';
import { LickAppWidgetChatModule } from 'lick-app-widget-chat';
import { LickAppWidgetFeedModule } from 'lick-app-widget-feed';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';
import { LickAppWidgetListBadgesModule } from 'lick-app-widget-list-badges';
import { LickAppWidgetListContentModule } from 'lick-app-widget-list-content';
import { LickAppWidgetListIconsModule } from 'lick-app-widget-list-icons';
import { LickAppWidgetListLinksModule } from 'lick-app-widget-list-links';
import { LickAppWidgetListOrderModule } from 'lick-app-widget-list-order';
import { LickAppWidgetListTaskModule } from 'lick-app-widget-list-task';
import { LickAppWidgetMessagesModule } from 'lick-app-widget-messages';
import { LickAppWidgetPost1Module } from 'lick-app-widget-post1';
import { LickAppWidgetPost2Module } from 'lick-app-widget-post2';
import { LickAppWidgetPost3Module } from 'lick-app-widget-post3';
import { LickAppWidgetPost4Module } from 'lick-app-widget-post4';
import { LickAppWidgetPost5Module } from 'lick-app-widget-post5';
import { LickAppWidgetStats1Module } from 'lick-app-widget-stats1';
import { LickAppWidgetStats2Module } from 'lick-app-widget-stats2';
import { LickAppWidgetStats3Module } from 'lick-app-widget-stats3';
import { LickAppWidgetStats4Module } from 'lick-app-widget-stats4';
import { LickAppWidgetStats5Module } from 'lick-app-widget-stats5';
import { LickAppWidgetStats6Module } from 'lick-app-widget-stats6';
import { LickAppWidgetStats7Module } from 'lick-app-widget-stats7';
import { LickAppWidgetStats8Module } from 'lick-app-widget-stats8';
import { LickAppWidgetStats9Module } from 'lick-app-widget-stats9';
import { LickAppWidgetStats10Module } from 'lick-app-widget-stats10';
import { LickAppWidgetStats11Module } from 'lick-app-widget-stats11';
import { LickAppWidgetStats12Module } from 'lick-app-widget-stats12';
import { LickAppWidgetStats13Module } from 'lick-app-widget-stats13';
import { LickAppWidgetStats14Module } from 'lick-app-widget-stats14';
import { LickAppWidgetStats15Module } from 'lick-app-widget-stats15';
import { LickAppWidgetStats16Module } from 'lick-app-widget-stats16';
import { LickAppWidgetStats17Module } from 'lick-app-widget-stats17';
import { LickAppWidgetTableDataModule } from 'lick-app-widget-table-data';
import { LickAppWidgetTotalsModule } from 'lick-app-widget-totals';
import { LickAppWidgetSpinnerModule} from 'lick-app-widget-spinner';
import { LickAppWidgetNotFoundModule} from 'lick-app-widget-not-found';
import { LickAppWidgetChatPopupModule} from 'lick-app-widget-chat-popup';
import { LickAppWidgetBreadcrumbModule } from 'lick-app-widget-breadcrumb';

import { LickAppWidgetSignupModule} from 'lick-app-widget-signup';
import { LickAppWidgetMaintenanceModule} from 'lick-app-widget-maintenance';
import { LickAppWidgetLoginModule} from 'lick-app-widget-login';
import { LickAppWidgetLockScreenModule } from 'lick-app-widget-lock-screen';
import { LickAppWidgetLockForgotPasswordModule } from 'lick-app-widget-lock-forgot-password';
import { LickAppWidgetLogoutModule } from 'lick-app-widget-logout';
import { NewsWidgetsComponent } from './news-widgets/news-widgets.component';
import { PageWidgetsComponent } from './page-widgets/page-widgets.component';


@NgModule({
  declarations: [StatWidgetsComponent, GeneralWidgetsComponent, NewsWidgetsComponent, PageWidgetsComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickyAppRoutingModule,
    LickDataModule,

    LickAppWidgetSignupModule,
    LickAppWidgetMaintenanceModule,
    LickAppWidgetLoginModule,
    LickAppWidgetLockScreenModule,
    LickAppWidgetLockForgotPasswordModule,
    LickAppWidgetLogoutModule,
    LickAppWidgetCardDeckModule,
    LickAppWidgetCardGroupModule,
    LickAppWidgetChatModule,
    LickAppWidgetFeedModule,
    LickAppWidgetFooterModule,
    LickAppWidgetListBadgesModule,
    LickAppWidgetListContentModule,
    LickAppWidgetListIconsModule,
    LickAppWidgetListLinksModule,
    LickAppWidgetListOrderModule,
    LickAppWidgetListTaskModule,
    LickAppWidgetMessagesModule,
    LickAppWidgetPost1Module,
    LickAppWidgetPost2Module,
    LickAppWidgetPost3Module,
    LickAppWidgetPost4Module,
    LickAppWidgetPost5Module,
    LickAppWidgetStats1Module,
    LickAppWidgetStats2Module,
    LickAppWidgetStats3Module,
    LickAppWidgetStats4Module,
    LickAppWidgetStats5Module,
    LickAppWidgetStats6Module,
    LickAppWidgetStats7Module,
    LickAppWidgetStats8Module,
    LickAppWidgetStats9Module,
    LickAppWidgetStats10Module,
    LickAppWidgetStats11Module,
    LickAppWidgetStats12Module,
    LickAppWidgetStats13Module,
    LickAppWidgetStats14Module,
    LickAppWidgetStats15Module,
    LickAppWidgetStats16Module,
    LickAppWidgetStats17Module,
    LickAppWidgetTableDataModule,
    LickAppWidgetTotalsModule,
    LickAppWidgetSpinnerModule,
    LickAppWidgetNotFoundModule,
    LickAppWidgetChatPopupModule,
    LickAppWidgetBreadcrumbModule
  ]
})
export class LickyAppModule { }
