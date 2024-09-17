import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1Component } from './modules/module1/module1.component';
import { Module2Component } from './modules/module2/module2.component';
import { Module3Component } from './modules/module3/module3.component';
import { Module4Component } from './modules/module4/module4.component';
import { Module5Component } from './modules/module5/module5.component';

@NgModule({
  declarations: [
    AppComponent,
    Module1Component,
    Module2Component,
    Module3Component,
    Module4Component,
    Module5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
