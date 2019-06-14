import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralWidgetsComponent} from './general-widgets/general-widgets.component';
import { StatWidgetsComponent} from './stat-widgets/stat-widgets.component';
import { NewsWidgetsComponent } from './news-widgets/news-widgets.component';

const routes: Routes = [
  { path: 'gernal-widgets', component: GeneralWidgetsComponent, data:{ title: 'General Widgets'}},
  { path: 'stat-widgets', component: StatWidgetsComponent, data:{ title: 'Statistic Widgets'}},
  { path: 'news-widgets', component: NewsWidgetsComponent, data:{ title: 'News Widgets'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LickyAppRoutingModule { }
