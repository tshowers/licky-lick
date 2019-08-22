import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FopRoutingModule } from './fop-routing.module';
import { FopEditComponent } from './fop-edit/fop-edit.component';
import { FopListComponent } from './fop-list/fop-list.component';
import { FopViewComponent } from './fop-view/fop-view.component';

@NgModule({
  declarations: [FopEditComponent, FopListComponent, FopViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FopRoutingModule
  ]
})
export class FopModule { }
