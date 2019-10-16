import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgwWowModule } from 'ngx-wow';
import { LickMarketingMenuModule} from 'lick-marketing-menu';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgwWowModule,
    LickMarketingMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
