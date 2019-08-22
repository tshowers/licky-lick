import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FopEditComponent } from './fop-edit/fop-edit.component';
import { FopListComponent } from './fop-list/fop-list.component';
import { FopViewComponent } from './fop-view/fop-view.component';

const routes : Routes = [
  { path: '', component: FopListComponent, data : { title: 'Form of Payment List'}},
  { path: 'new', component: FopEditComponent, data: { title: 'New Form of Payment', state: 'new fop' } },
  { path: ':id', component: FopViewComponent, data: { title: 'Form of Payment Detail', state: 'fop detail' } },
  { path: ':id/edit', component: FopEditComponent, data: { title: 'Edit Form of Payment', state: 'edit fop' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FopRoutingModule { }
