import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SelectionComponent} from './selection/selection.component';
import {DetailsComponent} from './details/details.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {CauseComponent} from './cause/cause.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'selection', component: SelectionComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: 'cause', component: CauseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
