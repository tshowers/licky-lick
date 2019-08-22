import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EmailAddressRoutingModule } from './email-address-routing.module';
import { EmailAddressEditComponent } from './email-address-edit/email-address-edit.component';
import { EmailAddressListComponent } from './email-address-list/email-address-list.component';
import { EmailAddressViewComponent } from './email-address-view/email-address-view.component';

@NgModule({
  declarations: [EmailAddressEditComponent, EmailAddressListComponent, EmailAddressViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    EmailAddressRoutingModule
  ]
})
export class EmailAddressModule { }
