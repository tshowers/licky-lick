import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { AddressModule } from '../address/address.module';
import { EmailAddressModule } from '../email-address/email-address.module';
import { FopModule } from '../fop/fop.module';
import { NoteModule } from '../note/note.module';
import { PhoneNumberModule } from '../phone-number/phone-number.module';
import { ContactDashboardComponent} from './contact-dashboard/contact-dashboard.component';
import { ContactListComponent} from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { ContactViewResolverService } from './services/contact-view-resolver.service';

const routes : Routes = [
  { path: '', component: ContactListComponent, data : { title: 'Contact List'}},
  { path: 'dashboard', component : ContactDashboardComponent, data : { title: 'Contact Dashboard'}},
  { path: 'new', component: ContactEditComponent, resolve: { contact: ContactResolverService }, data: { title: 'New Contact', state: 'new contact' } },
  { path: ':id', component: ContactViewComponent, resolve:{contact: ContactViewResolverService}, data: { title: 'Contact Detail', state: 'contact detail' } },
  { path: ':id/edit', component: ContactEditComponent, resolve: { contact: ContactResolverService }, data: { title: 'Edit Contact', state: 'edit contact' } },
  { path: ':id/addresses', canLoad: [AuthGuard], children: [ {path: '', loadChildren: '../address/address.module#AddressModule'} ]},
  { path: ':id/email-addresses', canLoad: [AuthGuard], children: [ {path: '', loadChildren: '../email-address/email-address.module#EmailAddressModule'} ]},
  { path: ':id/form-of-payments', canLoad: [AuthGuard], children: [ {path: '', loadChildren: '../fop/fop.module#FopModule'} ]},
  { path: ':id/notes', canLoad: [AuthGuard], children: [ {path: '', loadChildren: '../note/note.module#NoteModule'} ]},
  { path: ':id/phone-numbers', canLoad: [AuthGuard], children: [ {path: '', loadChildren: '../phone-number/phone-number.module#PhoneNumberModule'} ]},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ContactResolverService,
    ContactViewResolverService,
  ]
})
export class ContactRoutingModule { }
