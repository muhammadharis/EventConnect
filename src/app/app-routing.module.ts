import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinkedinPageComponent} from './linkedin-page/linkedin-page.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';

const routes:Routes = [
  {path: 'authorizationPage', component: LinkedinPageComponent},
  {path: 'selection', component: UserSelectionComponent},
  {path: 'messaging', component: UserSelectionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
