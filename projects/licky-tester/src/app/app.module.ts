import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
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
    LickMarketingMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
