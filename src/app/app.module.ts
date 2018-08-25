import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkedinPageComponent } from './linkedin-page/linkedin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkedinPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
