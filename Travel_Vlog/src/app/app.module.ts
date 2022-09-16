import { NgModule , Injector,DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector : Injector) {
    const wholeAppElement = createCustomElement(AppComponent, {
      injector : this.injector
    });
    customElements.define("app-whole-element",wholeAppElement);
  } 
  ngDoBootstrap() {}
 }
