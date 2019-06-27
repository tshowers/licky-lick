import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LickDataModule } from 'lick-data';
import { LickyLoginService } from './licky-login.service';
import { LickyLoginConfigService } from './licky-login-config.service';
import { FirebaseConfig } from './firebase-config.model';

import { SortHelperService } from './sort-helper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LickDataModule
  ],
  exports: [],
  providers: [
    SortHelperService,
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
