import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneNumberEditComponent } from './phone-number-edit/phone-number-edit.component';
import { PhoneNumberListComponent } from './phone-number-list/phone-number-list.component';
import { PhoneNumberViewComponent } from './phone-number-view/phone-number-view.component';

const routes : Routes = [
  { path: '', component: PhoneNumberListComponent, data : { title: 'Phone Number List'}},
  { path: 'new', component: PhoneNumberEditComponent, data: { title: 'New Phone Number', state: 'new phone number' } },
  { path: ':id', component: PhoneNumberViewComponent, data: { title: 'Phone Number Detail', state: 'phone number detail' } },
  { path: ':id/edit', component: PhoneNumberEditComponent, data: { title: 'Edit Phone Number', state: 'edit phone number' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneNumberRoutingModule { }
