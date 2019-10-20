import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteResolverService } from './services/note-resolver.service';
import { NoteViewResolverService } from './services/note-view-resolver.service';

const routes : Routes = [
  { path: '', canActivate: [AuthGuard], component: NoteListComponent, data : { title: 'Note List'}},
  { path: 'new', canActivate: [AuthGuard], resolve:{justText: NoteResolverService}, component: NoteEditComponent, data: { title: 'New Note', state: 'new note' } },
  { path: ':id2', canActivate: [AuthGuard], resolve:{justText: NoteViewResolverService}, component: NoteViewComponent, data: { title: 'Note Detail', state: 'note detail' } },
  { path: ':id2/edit', canActivate: [AuthGuard], resolve:{justText: NoteResolverService}, component: NoteEditComponent, data: { title: 'Edit Note', state: 'edit note' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    NoteResolverService,
    NoteViewResolverService
  ]

})
export class NoteRoutingModule { }
