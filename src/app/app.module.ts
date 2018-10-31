import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
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
import { ChatNofificationComponent } from './chat-nofification/chat-nofification.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CheckInComponent } from './check-in/check-in.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserSelectionComponent,
    SignUpComponent,
    LinkedinCardComponent,
    CareerProspectFormComponent,
    GithubCardComponent,
    EventsPageComponent,
    LogoutComponent,
    ChatboxComponent,
    ChatNofificationComponent,
    UpdateProfileComponent,
    CheckInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: process.env.MAPS_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
