import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationRoutingModule } from './application-routing.module';

import { LickAppWidgetMenuModule } from 'lick-app-widget-menu';
import { LickAppWidgetLeftSideMenuModule } from 'lick-app-widget-left-side-menu';
import { LickAppWidgetBreadcrumbModule } from 'lick-app-widget-breadcrumb';
import { LickAppWidgetChatPopupModule } from 'lick-app-widget-chat-popup';
import { LickAppWidgetRightSideMenuModule } from 'lick-app-widget-right-side-menu';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';
import { LickAppWidgetStats1Module } from 'lick-app-widget-stats1';
import { LickAppWidgetStats4Module } from 'lick-app-widget-stats4';
import { LickAppWidgetStats7Module } from 'lick-app-widget-stats7';
import { LickAppWidgetStats8Module } from 'lick-app-widget-stats8';
import { LickAppWidgetStats9Module } from 'lick-app-widget-stats9';
import { LickAppWidgetStats11Module } from 'lick-app-widget-stats11';
import { LickAppWidgetStats12Module } from 'lick-app-widget-stats12';
import { LickAppWidgetStats13Module } from 'lick-app-widget-stats13';
import { LickAppWidgetStats14Module } from 'lick-app-widget-stats14';
import { LickAppWidgetStats15Module } from 'lick-app-widget-stats15';
import { LickAppWidgetStats16Module } from 'lick-app-widget-stats16';
import { LickAppWidgetListContentModule } from 'lick-app-widget-list-content';
import { LickAppWidgetListArticleSummaryModule } from 'lick-app-widget-list-article-summary';
import { LickAppWidgetTableDataModule } from 'lick-app-widget-table-data';


import { LoginPageComponent } from './access/login-page/login-page.component';
import { LogoutPageComponent } from './access/logout-page/logout-page.component';
import { ResetPageComponent } from './access/reset-page/reset-page.component';
import { SignUpPageComponent } from './access/sign-up-page/sign-up-page.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { AlertComponent } from './notification/alert/alert.component';
import { MessageComponent } from './notification/message/message.component';
import { TaskComponent } from './notification/task/task.component';
import { OrderEditComponent } from './commerce/orders/order-edit/order-edit.component';
import { OrderListComponent } from './commerce/orders/order-list/order-list.component';
import { OrderViewComponent } from './commerce/orders/order-view/order-view.component';
import { ProductEditComponent } from './commerce/products/product-edit/product-edit.component';
import { ProductViewComponent } from './commerce/products/product-view/product-view.component';
import { ProductListComponent } from './commerce/products/product-list/product-list.component';
import { ShoppingCartEditComponent } from './commerce/cart/shopping-cart-edit/shopping-cart-edit.component';
import { ShoppingCartViewComponent } from './commerce/cart/shopping-cart-view/shopping-cart-view.component';
import { ShoppingCartListComponent } from './commerce/cart/shopping-cart-list/shopping-cart-list.component';
import { StoreEditComponent } from './commerce/stores/store-edit/store-edit.component';
import { StoreListComponent } from './commerce/stores/store-list/store-list.component';
import { StoreViewComponent } from './commerce/stores/store-view/store-view.component';
import { ProductBundleEditComponent } from './commerce/products/bundles/product-bundle-edit/product-bundle-edit.component';
import { ProductBundleViewComponent } from './commerce/products/bundles/product-bundle-view/product-bundle-view.component';
import { ProductBundleListComponent } from './commerce/products/bundles/product-bundle-list/product-bundle-list.component';
import { DashboardComponent } from './commerce/dashboard/dashboard.component';
import { CatalogEditComponent } from './commerce/catalog/catalog-edit/catalog-edit.component';
import { CatalogListComponent } from './commerce/catalog/catalog-list/catalog-list.component';
import { CatalogViewComponent } from './commerce/catalog/catalog-view/catalog-view.component';
import { PaymentListComponent } from './commerce/payment/payment-list/payment-list.component';
import { PaymentViewComponent } from './commerce/payment/payment-view/payment-view.component';
import { PaymentEditComponent } from './commerce/payment/payment-edit/payment-edit.component';
import { OfferEditComponent } from './commerce/offer/offer-edit/offer-edit.component';
import { OfferListComponent } from './commerce/offer/offer-list/offer-list.component';
import { OfferViewComponent } from './commerce/offer/offer-view/offer-view.component';

@NgModule({
  declarations: [LoginPageComponent, LogoutPageComponent, ResetPageComponent, SignUpPageComponent, ProfileComponent, SettingsComponent, AlertComponent, MessageComponent, TaskComponent, OrderEditComponent, OrderListComponent, OrderViewComponent, ProductEditComponent, ProductViewComponent, ProductListComponent, ShoppingCartEditComponent, ShoppingCartViewComponent, ShoppingCartListComponent, StoreEditComponent, StoreListComponent, StoreViewComponent, ProductBundleEditComponent, ProductBundleViewComponent, ProductBundleListComponent, DashboardComponent, CatalogEditComponent, CatalogListComponent, CatalogViewComponent, PaymentListComponent, PaymentViewComponent, PaymentEditComponent, OfferEditComponent, OfferListComponent, OfferViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationRoutingModule,
    LickAppWidgetMenuModule,
    LickAppWidgetLeftSideMenuModule,
    LickAppWidgetBreadcrumbModule,
    LickAppWidgetChatPopupModule,
    LickAppWidgetRightSideMenuModule,
    LickAppWidgetFooterModule,
    LickAppWidgetStats1Module,
    LickAppWidgetStats4Module,
    LickAppWidgetStats7Module,
    LickAppWidgetStats8Module,
    LickAppWidgetStats9Module,
    LickAppWidgetStats11Module,
    LickAppWidgetStats12Module,
    LickAppWidgetStats13Module,
    LickAppWidgetStats14Module,
    LickAppWidgetStats15Module,
    LickAppWidgetStats16Module,
    LickAppWidgetListContentModule,
    LickAppWidgetListArticleSummaryModule,
    LickAppWidgetTableDataModule
  ]
})
export class ApplicationModule { }
