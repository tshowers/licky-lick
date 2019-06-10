import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderWidgetsComponent } from './header-widgets/header-widgets.component';
import { GeneralWidgetsComponent } from './general-widgets/general-widgets.component';

const routes: Routes = [
  { path: '', component: GeneralWidgetsComponent, data:{ title: 'General Widgets'}, pathMatch: 'full'},
  { path: 'header-widgets', component: HeaderWidgetsComponent, data:{ title: 'Header Widgets'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LickyMarketingRoutingModule { }
