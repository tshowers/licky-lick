import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailAddressEditComponent } from './email-address-edit/email-address-edit.component';
import { EmailAddressListComponent } from './email-address-list/email-address-list.component';
import { EmailAddressViewComponent } from './email-address-view/email-address-view.component';

const routes : Routes = [
  { path: '', component: EmailAddressListComponent, data : { title: 'Email Address List'}},
  { path: 'new', component: EmailAddressEditComponent, data: { title: 'New Email Address', state: 'new email address' } },
  { path: ':id', component: EmailAddressViewComponent, data: { title: 'Email Address Detail', state: 'email address detail' } },
  { path: ':id/edit', component: EmailAddressEditComponent, data: { title: 'Edit Email Address', state: 'edit email address' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailAddressRoutingModule { }
