import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';

@NgModule({
  declarations: [HomePageComponent, PrivacyPageComponent],
  imports: [
    CommonModule
  ]
})
export class MarketingModule { }
