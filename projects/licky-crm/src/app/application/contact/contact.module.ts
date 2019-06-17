import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [ContactListComponent, ContactEditComponent, ContactDashboardComponent, ContactViewComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
