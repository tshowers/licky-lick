import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetMenuModule } from 'lick-app-widget-menu';
import { LickAppWidgetTableDataModule } from 'lick-app-widget-table-data';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickMarketingSecurityModule } from 'lick-marketing-security';
import { LickDataModule } from 'lick-data';
import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LickDataModule,
    LickyServicesModule.forRoot(firebaseConfig),
    LickMarketingSecurityModule,
    LickMarketingMenuModule,
    LickAppWidgetTableDataModule,
    LickAppWidgetMenuModule
  ],
  exports: [
    NavComponent,
    RouterModule,
    HttpClientModule,
    LickDataModule,
    LickyServicesModule,
    LickMarketingSecurityModule,
    LickAppWidgetTableDataModule,
    LickAppWidgetMenuModule
  ]
})
export class SharedModule { }
