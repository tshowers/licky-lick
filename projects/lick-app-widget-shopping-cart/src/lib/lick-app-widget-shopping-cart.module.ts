import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LickAppWidgetShoppingCartComponent } from './lick-app-widget-shopping-cart.component';

@NgModule({
  declarations: [LickAppWidgetShoppingCartComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    UiSwitchModule,
  ],
  exports: [LickAppWidgetShoppingCartComponent]
})
export class LickAppWidgetShoppingCartModule { }
