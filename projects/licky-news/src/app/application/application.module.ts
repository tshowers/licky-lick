import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApplicationRoutingModule } from './application-routing.module';

import { NewsPickerComponent } from './news-picker/news-picker.component';
import { NewsViewComponent } from './news-view/news-view.component';

@NgModule({
  declarations: [NewsPickerComponent, NewsViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
