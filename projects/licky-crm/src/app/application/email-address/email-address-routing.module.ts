import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

import { EmailAddressEditComponent } from './email-address-edit/email-address-edit.component';
import { EmailAddressListComponent } from './email-address-list/email-address-list.component';
import { EmailAddressViewComponent } from './email-address-view/email-address-view.component';

import { EmailAddressResolverService } from './services/email-address-resolver.service';
import { EmailAddressViewResolverService } from './services/email-address-view-resolver.service';

const routes : Routes = [
  { path: '', canActivate: [AuthGuard], component: EmailAddressListComponent, data : { title: 'Email Address List'}},
  { path: 'new', canActivate: [AuthGuard], resolve:{emailAddress: EmailAddressResolverService}, component: EmailAddressEditComponent, data: { title: 'New Email Address', state: 'new email address' } },
  { path: ':id2', canActivate: [AuthGuard], resolve:{emailAddress: EmailAddressViewResolverService}, component: EmailAddressViewComponent, data: { title: 'Email Address Detail', state: 'email address detail' } },
  { path: ':id2/edit', canActivate: [AuthGuard], resolve:{emailAddress: EmailAddressResolverService}, component: EmailAddressEditComponent, data: { title: 'Edit Email Address', state: 'edit email address' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    EmailAddressResolverService,
    EmailAddressViewResolverService
  ]

})
export class EmailAddressRoutingModule { }
