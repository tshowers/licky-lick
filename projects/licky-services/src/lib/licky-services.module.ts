import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LickDataModule } from 'lick-data';
import { LickyLoginService } from './licky-login.service';
import { NewsService } from './news.service';
import { LickyLoginConfigService } from './licky-login-config.service';
import { FirebaseConfig } from './firebase-config.model';

import { SortHelperService } from './sort-helper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LickDataModule
  ],
  exports: [],
  providers: [
    SortHelperService,
    NewsService
  ]

})
export class LickyServicesModule {
  static forRoot(config: FirebaseConfig): ModuleWithProviders {
    console.log("Environment passed =" + JSON.stringify(config));
    return {
      ngModule: LickyServicesModule,
      providers: [
        LickyLoginService,
        {
          provide: LickyLoginConfigService,
          useValue: config
        }
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: LickyServicesModule
    }
  }

}
