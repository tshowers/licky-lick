import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AddressRoutingModule } from './address-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressViewComponent } from './address-view/address-view.component';

@NgModule({
  declarations: [AddressListComponent, AddressEditComponent, AddressViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
