import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LickDataModule } from 'lick-data';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LickDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
