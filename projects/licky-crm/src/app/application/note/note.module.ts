import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NoteRoutingModule } from './note-routing.module';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteViewComponent } from './note-view/note-view.component';

@NgModule({
  declarations: [NoteEditComponent, NoteListComponent, NoteViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    NoteRoutingModule
  ]
})
export class NoteModule { }
