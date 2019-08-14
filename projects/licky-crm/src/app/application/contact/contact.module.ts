import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [ContactListComponent, ContactEditComponent, ContactDashboardComponent, ContactViewComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
