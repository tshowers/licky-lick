import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PhoneNumberRoutingModule } from './phone-number-routing.module';
import { PhoneNumberEditComponent } from './phone-number-edit/phone-number-edit.component';
import { PhoneNumberListComponent } from './phone-number-list/phone-number-list.component';
import { PhoneNumberViewComponent } from './phone-number-view/phone-number-view.component';

@NgModule({
  declarations: [PhoneNumberEditComponent, PhoneNumberListComponent, PhoneNumberViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PhoneNumberRoutingModule
  ]
})
export class PhoneNumberModule { }
