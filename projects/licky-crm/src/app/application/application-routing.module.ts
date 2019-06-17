import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contact/contact.module';


const routes : Routes = [
  { path: 'contacts', children: [ {path: '', loadChildren: './contact/contact.module#ContactModule'} ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
