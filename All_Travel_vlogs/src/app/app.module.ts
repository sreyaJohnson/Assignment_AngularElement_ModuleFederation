import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VlogSeriesComponent } from './vlog-series/vlog-series.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VlogSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
