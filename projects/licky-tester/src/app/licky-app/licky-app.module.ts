import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickyAppRoutingModule } from './licky-app-routing.module';
import { StatWidgetsComponent } from './stat-widgets/stat-widgets.component';
import { GeneralWidgetsComponent } from './general-widgets/general-widgets.component';
import { LickDataModule } from 'lick-data';

import { LickAppWidgetCardDeckModule } from 'lick-app-widget-card-deck';
import { LickAppWidgetCardGroupModule } from 'lick-app-widget-card-group';
import { LickAppWidgetChatModule } from 'lick-app-widget-chat';

@NgModule({
  declarations: [StatWidgetsComponent, GeneralWidgetsComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickyAppRoutingModule,
    LickDataModule,

    LickAppWidgetCardDeckModule,
    LickAppWidgetCardGroupModule,
    LickAppWidgetChatModule
  ]
})
export class LickyAppModule { }
