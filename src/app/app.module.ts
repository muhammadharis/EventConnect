import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LinkedinPageComponent } from './linkedin-page/linkedin-page.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AgmCoreModule } from '@agm/core';

import { LinkedinCardComponent } from './linkedin-card/linkedin-card.component';

import { CareerProspectFormComponent } from './career-prospect-form/career-prospect-form.component';
import { GithubCardComponent } from './github-card/github-card.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatboxComponent } from './chatbox/chatbox.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkedinPageComponent,
    UserSelectionComponent,
    SignUpComponent,
    LinkedinCardComponent,
    CareerProspectFormComponent,
    GithubCardComponent,
    EventsPageComponent,
    LogoutComponent,
    ChatboxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDIcRRXY6G6-5Mh-bWt66U3NzH_Vx5GIw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
