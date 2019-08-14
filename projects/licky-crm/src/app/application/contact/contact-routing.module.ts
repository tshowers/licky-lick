import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDashboardComponent} from './contact-dashboard/contact-dashboard.component';
import { ContactListComponent} from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes : Routes = [
  { path: '', component: ContactListComponent, data : { title: 'Contact List'}},
  { path: 'dashboard', component : ContactDashboardComponent, data : { title: 'Contact Dashboard'}},
  { path: 'new', component: ContactEditComponent, data: { title: 'New Contact', state: 'new contact' } },
  { path: ':id', component: ContactViewComponent, data: { title: 'Contact Detail', state: 'contact detail' } },
  { path: ':id/edit', component: ContactEditComponent, data: { title: 'Edit Contact', state: 'edit contact' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
