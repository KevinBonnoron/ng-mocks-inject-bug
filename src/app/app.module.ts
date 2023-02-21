import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ENVIRONMENT_TOKEN } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: ENVIRONMENT_TOKEN, useValue: { baseUrl: 'http://localhost:3000' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
