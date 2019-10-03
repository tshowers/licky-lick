import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Every Angular app has a root module class. By convention, this
// is root module class and is called AppModule. The @NgModule decorator
// defines the metadata for the module. BrowserModule registers critical
// application service providers. It also includes common directives like
// NgIf and NgFor, which become immediately visible and usable in any of this
// module's component templates.
//
// The declarations list identifies the application's only component, the
// root component, the top of the app's rather bare component tree.

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
