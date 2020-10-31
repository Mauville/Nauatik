import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SelectionComponent} from './selection/selection.component';
import {DetailsComponent} from './details/details.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {CauseComponent} from './cause/cause.component';
import {SignupComponent} from './signup/signup.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [
  {path: '', component: LoginComponent, data: {animation: 'Login'}},
  {path: 'home', component: HomeComponent, data: {animation: 'Home'}},
  {path: 'profile', component: ProfileComponent, data: {animation: 'Profile'}},
  {path: 'selection', component: SelectionComponent, data: {animation: 'Selection'}},
  {path: 'details', component: DetailsComponent, data: {animation: 'Details'}},
  {path: 'thankyou', component: ThankyouComponent, data: {animation: 'ThankYou'}},
  {path: 'cause', component: CauseComponent, data: {animation: 'Cause'}},
  {path: 'signup', component: SignupComponent, data: {animation: 'SignUp'}},
  {path: 'summary', component: SummaryComponent, data: {animation: 'SignUp'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
