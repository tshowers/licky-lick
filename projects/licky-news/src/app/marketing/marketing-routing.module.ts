import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { MessagePageComponent } from './message-page/message-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Home Page - 16 AHEAD - News' } },
  { path: 'contact', component: ContactPageComponent, data: { title: 'Contact Page - 16 AHEAD - News' } },
  { path: 'privacy', component: PrivacyPageComponent, data: { title: 'Privacy Policy - 16 AHEAD - News' } },
  { path: 'message', component: MessagePageComponent, data: { title: 'Message - 16 AHEAD - News' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
