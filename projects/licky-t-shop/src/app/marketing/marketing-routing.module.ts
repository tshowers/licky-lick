import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Home Page - 16 AHEAD - eCommerce' } },
  { path: 'contact', component: ContactPageComponent, data: { title: 'eCommerce Contact Page - 16 AHEAD - CRM' } },
  { path: 'privacy', component: PrivacyPageComponent, data: { title: 'Privacy Policy Page - 16 AHEAD - eCommerce' } },
  { path: 'terms', component: TermsPageComponent, data: { title: 'Terms of Use - 16 AHEAD - eCommerce' } }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
