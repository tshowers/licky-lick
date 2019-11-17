import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { NotificationModule } from './notification/notification.module';

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


import { LoginPageComponent } from './access/login-page/login-page.component';
import { LogoutPageComponent } from './access/logout-page/logout-page.component';
import { SignUpPageComponent } from './access/sign-up-page/sign-up-page.component';
import { ResetPageComponent } from './access/reset-page/reset-page.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';

import { ShoppingCartResolverService } from './commerce/cart/services/shopping-cart-resolver.service';
import { ShoppingCartViewResolverService } from './commerce/cart/services/shopping-cart-view-resolver.service';

import { OrderResolverService } from './commerce/orders/services/order-resolver.service';
import { OrderViewResolverService } from './commerce/orders/services/order-view-resolver.service';

import { ProductResolverService } from './commerce/products/services/product-resolver.service';
import { ProductViewResolverService } from './commerce/products/services/product-view-resolver.service';

import { ProductBundleResolverService } from './commerce/products/services/product-bundle-resolver.service';
import { ProductBundleViewResolverService } from './commerce/products/services/product-bundle-view-resolver.service';

import { StoreResolverService } from './commerce/stores/services/store-resolver.service';
import { StoreViewResolverService } from './commerce/stores/services/store-view-resolver.service';


const routes : Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard - eCommerce - 16 AHEAD' }},
  { path: 'notification', canLoad: [AuthGuard], children: [ {path: '', loadChildren: './notification/notification.module#NotificationModule'} ]},
  { path: 'stores', component: StoreListComponent, data: { title: 'Stores - eCommerce - 16 AHEAD' }},
  { path: 'carts', component: ShoppingCartListComponent, data: { title: 'ShoppingCarts - eCommerce - 16 AHEAD' }},

  { path: 'profile', component: ProfileComponent, data: { title: 'Profile - eCommerce - 16 AHEAD' }},
  { path: 'settings', component: SettingsComponent, data: { title: 'Settings - eCommerce - 16 AHEAD' }},
  { path: 'login', component: LoginPageComponent, data: { title: 'Login - eCommerce - 16 AHEAD' }},
  { path: 'sign-up', component: SignUpPageComponent, data: { title: 'Sign Up - eCommerce - 16 AHEAD' }},
  { path: 'reset', component: ResetPageComponent, data: { title: 'Password Reset - eCommerce - 16 AHEAD' }},
  { path: 'logout', component: LogoutPageComponent, data: { title: 'You Are Logged Out - eCommerce - 16 AHEAD' }},

  { path: 'stores/new', resolve: { topic: StoreResolverService }, component: StoreEditComponent, data: { title: 'New Store - eCommerce - 16 AHEAD' }},
  { path: 'carts/new', resolve: { topic: ShoppingCartResolverService }, component: ShoppingCartEditComponent, data: { title: 'New ShoppingCart - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id', resolve: { topic: StoreViewResolverService }, component: StoreViewComponent, data: { title: 'Store - eCommerce - 16 AHEAD' }},
  { path: 'carts/:id', resolve: { topic: ShoppingCartViewResolverService }, component: ShoppingCartViewComponent, data: { title: 'ShoppingCart - eCommerce - 16 AHEAD' }},

  { path: 'stores/:id/edit', resolve: { topic: StoreResolverService }, component: StoreEditComponent, data: { title: 'Edit Store - eCommerce - 16 AHEAD' }},
  { path: 'carts/:id/edit', resolve: { topic: ShoppingCartResolverService }, component: ShoppingCartEditComponent, data: { title: 'Edit ShoppingCart - eCommerce - 16 AHEAD' }},

  { path: 'stores/:id/orders', component: OrderListComponent, data: { title: 'Orders - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/products', component: ProductListComponent, data: { title: 'Products - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/product-bundles', component: ProductBundleListComponent, data: { title: 'ProductBundles - eCommerce - 16 AHEAD' }},

  { path: 'stores/:id/orders/new', resolve: { topic: OrderResolverService }, component: OrderEditComponent, data: { title: 'New Order - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/products/new', resolve: { topic: ProductResolverService }, component: ProductEditComponent, data: { title: 'New Product - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/product-bundles/new', resolve: { topic: ProductBundleResolverService }, component: ProductBundleEditComponent, data: { title: 'New ProductBundle - eCommerce - 16 AHEAD' }},

  { path: 'stores/:id/orders/:id2', resolve: { topic: OrderViewResolverService }, component: OrderViewComponent, data: { title: 'Order - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/products/:id2', resolve: { topic: ProductViewResolverService }, component: ProductViewComponent, data: { title: 'Product - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/product-bundles/:id2', resolve: { topic: ProductBundleViewResolverService }, component: ProductBundleViewComponent, data: { title: 'ProductBundle - eCommerce - 16 AHEAD' }},

  { path: 'stores/:id/orders/:id2/edit', resolve: { topic: OrderResolverService }, component: OrderEditComponent, data: { title: 'Edit Order - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/products/:id2/edit', resolve: { topic: ProductResolverService }, component: ProductEditComponent, data: { title: 'Edit Product - eCommerce - 16 AHEAD' }},
  { path: 'stores/:id/product-bundles/:id2/edit', resolve: { topic: ProductBundleResolverService }, component: ProductBundleEditComponent, data: { title: 'Edit ProductBundle - eCommerce - 16 AHEAD' }},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ShoppingCartResolverService,
    ShoppingCartViewResolverService,
    OrderResolverService,
    OrderViewResolverService,
    ProductResolverService,
    ProductViewResolverService,
    ProductBundleResolverService,
    ProductBundleViewResolverService,
    StoreResolverService,
    StoreViewResolverService
  ]

})
export class ApplicationRoutingModule { }
