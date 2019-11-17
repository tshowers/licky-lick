import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationRoutingModule } from './application-routing.module';

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

@NgModule({
  declarations: [LoginPageComponent, LogoutPageComponent, ResetPageComponent, SignUpPageComponent, ProfileComponent, SettingsComponent, AlertComponent, MessageComponent, TaskComponent, OrderEditComponent, OrderListComponent, OrderViewComponent, ProductEditComponent, ProductViewComponent, ProductListComponent, ShoppingCartEditComponent, ShoppingCartViewComponent, ShoppingCartListComponent, StoreEditComponent, StoreListComponent, StoreViewComponent, ProductBundleEditComponent, ProductBundleViewComponent, ProductBundleListComponent, DashboardComponent],
  imports: [
    CommonModule, SharedModule, ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
