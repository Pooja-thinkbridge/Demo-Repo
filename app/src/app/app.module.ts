import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListApiComponent } from './list-api/list-api.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListApiComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
