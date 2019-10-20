import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

import { PhoneNumberEditComponent } from './phone-number-edit/phone-number-edit.component';
import { PhoneNumberListComponent } from './phone-number-list/phone-number-list.component';
import { PhoneNumberViewComponent } from './phone-number-view/phone-number-view.component';
import { PhoneNumberResolverService } from './services/phone-number-resolver.service';
import { PhoneNumberViewResolverService } from './services/phone-number-view-resolver.service';

const routes : Routes = [
  { path: '', canActivate: [AuthGuard], component: PhoneNumberListComponent, data : { title: 'Phone Number List'}},
  { path: 'new', canActivate: [AuthGuard], resolve:{phoneNumber: PhoneNumberResolverService}, component: PhoneNumberEditComponent, data: { title: 'New Phone Number', state: 'new phone number' } },
  { path: ':id2', canActivate: [AuthGuard], resolve:{phoneNumber: PhoneNumberViewResolverService}, component: PhoneNumberViewComponent, data: { title: 'Phone Number Detail', state: 'phone number detail' } },
  { path: ':id2/edit', canActivate: [AuthGuard], resolve:{phoneNumber: PhoneNumberResolverService}, component: PhoneNumberEditComponent, data: { title: 'Edit Phone Number', state: 'edit phone number' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PhoneNumberResolverService,
    PhoneNumberViewResolverService
  ]
})
export class PhoneNumberRoutingModule { }
