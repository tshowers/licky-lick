import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPickerComponent } from './news-picker/news-picker.component';
import { NewsViewComponent } from './news-view/news-view.component';

const routes : Routes = [
  { path: 'news', component: NewsViewComponent, data: { title: 'News - 16 AHEAD' }},
  { path: 'news-selector', component: NewsPickerComponent, data: { title: 'News Selector - 16 AHEAD' }}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
