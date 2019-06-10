import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LickyMarketingModule } from './licky-marketing/licky-marketing.module';

const routes: Routes = [
  { path: '', loadChildren: './licky-marketing/licky-marketing.module#LickyMarketingModule' },
  // { path: 'application-widgets', component: ApplicationWidgetsComponent, data: { title: 'Application Widgets'} },
  // { path: 'customer-facing-widgets', component: CustomerFacingWidgetsComponent, data: { title: 'Customer Facing Widgets'} },
  // { path: 'news-widgets', component: NewsWidgetsComponent, data: { title: 'News Widgets'} },
  // { path: 'terms', component: IntroComponent, data: { title: 'Application Access'} },
  // { path: 'access', children: [ {path: '', loadChildren: './sign-in-sign-out/sign-in-sign-out.module#SignInSignOutModule'} ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
