import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LickAppWidgetMaintenanceModule } from 'lick-app-widget-maintenance';
import { LickAppWidgetNotFoundModule } from 'lick-app-widget-not-found';

import { AppComponent } from './app.component';
import { HomeMaintenanceComponent } from './home-maintenance/home-maintenance.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMaintenanceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeMaintenanceComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    LickAppWidgetMaintenanceModule,
    LickAppWidgetNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
