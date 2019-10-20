import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

import { FopEditComponent } from './fop-edit/fop-edit.component';
import { FopListComponent } from './fop-list/fop-list.component';
import { FopViewComponent } from './fop-view/fop-view.component';
import { FopResolverService } from './services/fop-resolver.service';
import { FopViewResolverService } from './services/fop-view-resolver.service';

const routes : Routes = [
  { path: '', canActivate: [AuthGuard], component: FopListComponent, data : { title: 'Form of Payment List'}},
  { path: 'new', canActivate: [AuthGuard], resolve:{fop: FopResolverService}, component: FopEditComponent, data: { title: 'New Form of Payment', state: 'new fop' } },
  { path: ':id2', canActivate: [AuthGuard], resolve:{fop: FopViewResolverService}, component: FopViewComponent, data: { title: 'Form of Payment Detail', state: 'fop detail' } },
  { path: ':id2/edit', canActivate: [AuthGuard], resolve:{fop: FopResolverService}, component: FopEditComponent, data: { title: 'Edit Form of Payment', state: 'edit fop' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    FopResolverService,
    FopViewResolverService
  ]

})
export class FopRoutingModule { }
