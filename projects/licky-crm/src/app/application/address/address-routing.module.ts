import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressViewComponent } from './address-view/address-view.component';

const routes : Routes = [
  { path: '', component: AddressListComponent, data : { title: 'Address List'}},
  { path: 'new', component: AddressEditComponent, data: { title: 'New Address', state: 'new address' } },
  { path: ':id', component: AddressViewComponent, data: { title: 'Address Detail', state: 'adddress detail' } },
  { path: ':id/edit', component: AddressEditComponent, data: { title: 'Edit Address', state: 'edit address' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
