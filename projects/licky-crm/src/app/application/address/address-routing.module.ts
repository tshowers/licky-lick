import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

import { AddressListComponent } from './address-list/address-list.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressViewComponent } from './address-view/address-view.component';
import { AddressResolverService } from './services/address-resolver.service';
import { AddressViewResolverService } from './services/address-view-resolver.service';


const routes : Routes = [
  { path: '', canActivate: [AuthGuard], component: AddressListComponent, data : { title: 'Address List'}},
  { path: 'new', canActivate: [AuthGuard], resolve:{address: AddressResolverService}, component: AddressEditComponent, data: { title: 'New Address', state: 'new address' } },
  { path: ':id2', canActivate: [AuthGuard], resolve:{address: AddressViewResolverService}, component: AddressViewComponent, data: { title: 'Address Detail', state: 'adddress detail' } },
  { path: ':id2/edit', canActivate: [AuthGuard], resolve:{address: AddressResolverService}, component: AddressEditComponent, data: { title: 'Edit Address', state: 'edit address' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AddressResolverService,
    AddressViewResolverService
  ]
})
export class AddressRoutingModule { }
