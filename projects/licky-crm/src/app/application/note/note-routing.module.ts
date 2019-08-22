import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteViewComponent } from './note-view/note-view.component';
const routes : Routes = [
  { path: '', component: NoteListComponent, data : { title: 'Note List'}},
  { path: 'new', component: NoteEditComponent, data: { title: 'New Note', state: 'new note' } },
  { path: ':id', component: NoteViewComponent, data: { title: 'Note Detail', state: 'note detail' } },
  { path: ':id/edit', component: NoteEditComponent, data: { title: 'Edit Note', state: 'edit note' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
