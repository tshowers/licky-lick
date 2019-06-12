import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralWidgetsComponent} from './general-widgets/general-widgets.component';
import { StatWidgetsComponent} from './stat-widgets/stat-widgets.component';

const routes: Routes = [
  { path: 'gernal-widgets', component: GeneralWidgetsComponent, data:{ title: 'General Widgets'}},
  { path: 'stat-widgets', component: StatWidgetsComponent, data:{ title: 'Statistic Widgets'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LickyAppRoutingModule { }
