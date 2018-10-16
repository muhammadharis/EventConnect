import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LinkedinCardComponent} from './linkedin-card/linkedin-card.component';
import {GithubCardComponent} from './github-card/github-card.component';
import {ChatboxComponent} from './chatbox/chatbox.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {CheckInComponent} from './check-in/check-in.component';

const routes:Routes = [
  {path: '', component: HomePageComponent},
  {path: 'selection', component: UserSelectionComponent},
  {path: 'messaging', component: UserSelectionComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'linkedin', component: LinkedinCardComponent},
  {path: 'github', component: GithubCardComponent},
  {path: 'chat', component: ChatboxComponent},
  {path: 'updateProfile', component: UpdateProfileComponent},
  {path: 'checkin', component: CheckInComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
