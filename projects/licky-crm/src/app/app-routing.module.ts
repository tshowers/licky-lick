import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomePageComponent } from './marketing/home-page/home-page.component';

import { MarketingModule } from './marketing/marketing.module';
import { ApplicationModule } from './application/application.module';


const routes: Routes = [
  { path: 'about', loadChildren: './marketing/marketing.module#MarketingModule' },
  { path: 'application', loadChildren: './application/application.module#ApplicationModule' },
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
