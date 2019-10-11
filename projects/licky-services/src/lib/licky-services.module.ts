import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LickDataModule } from 'lick-data';
import { LickyLoginService } from './licky-login.service';
import { NewsService } from './news.service';
import { WeatherService } from './weather.service';
import { LickyLoginConfigService } from './licky-login-config.service';
import { FirebaseConfig } from './firebase-config.model';

import { SortHelperService } from './sort-helper.service';
import { DateUtilService } from './date-util.service';
import { TypeFindService } from './type-find.service';
import { DropdownService } from './dropdown.service';
import { UserLocationService } from './user-location.service';
import { RemoteAssetService} from './remote-asset.service';
import { YoutubeService } from './youtube.service';
import { UploadService } from './upload.service';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey, libraries:["places"]}),
    LickDataModule
  ],
  exports: [
    AgmCoreModule
  ],
  providers: [
    SortHelperService,
    NewsService,
    YoutubeService,
    TypeFindService,
    DropdownService,
    UserLocationService,
    WeatherService,
    RemoteAssetService,
    DateUtilService,
    UploadService
  ]

})
export class LickyServicesModule {
  static forRoot(config: FirebaseConfig, caller?: string): ModuleWithProviders {
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
