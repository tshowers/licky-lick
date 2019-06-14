import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderWidgetsComponent } from './header-widgets/header-widgets.component';
import { GeneralWidgetsComponent } from './general-widgets/general-widgets.component';
import { MiscellaneousWidgetsComponent } from './miscellaneous-widgets/miscellaneous-widgets.component';

const routes: Routes = [
  { path: 'general-widgets', component: GeneralWidgetsComponent, data:{ title: 'General Widgets'}},
  { path: 'header-widgets', component: HeaderWidgetsComponent, data:{ title: 'Header Widgets'}},
  { path: 'misc-widgets', component: MiscellaneousWidgetsComponent, data:{ title: 'Miscellaneous Widgets'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LickyMarketingRoutingModule { }
