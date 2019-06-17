import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDashboardComponent} from './contact-dashboard/contact-dashboard.component';
import { ContactListComponent} from './contact-list/contact-list.component';

const routes : Routes = [
  { path: '', component: ContactListComponent, data : { title: 'List'}},
  { path: 'dashboard', component : ContactDashboardComponent, data : { title: 'Dashboard'}},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
