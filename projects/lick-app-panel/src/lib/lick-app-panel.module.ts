import { NgModule } from '@angular/core';
import { LickAppPanelComponent } from './lick-app-panel.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LickAppPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [LickAppPanelComponent]
})
export class LickAppPanelModule { }
