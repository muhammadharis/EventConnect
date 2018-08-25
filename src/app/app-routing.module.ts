import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinkedinPageComponent} from './linkedin-page/linkedin-page.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LinkedinCardComponent} from './linkedin-card/linkedin-card.component';

const routes:Routes = [
  {path: '', component: LinkedinPageComponent},
  {path: 'selection', component: UserSelectionComponent},
  {path: 'messaging', component: UserSelectionComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'linkedin', component: LinkedinCardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
