import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LickAppWidgetNotFoundModule } from 'lick-app-widget-not-found';
import { CoreModule } from './core.module';
import { NgwWowModule } from 'ngx-wow';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './application/not-found/not-found.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LickAppWidgetNotFoundModule,
    RouterModule,
    AppRoutingModule,
    NgwWowModule,
    CoreModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
