import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ButtonComponent} from './button/button.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {CategoryComponent} from './category/category.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BannerComponent} from './banner/banner.component';
import {ProfileComponent} from './profile/profile.component';
import {SelectionComponent} from './selection/selection.component';
import {DetailsComponent} from './details/details.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {CauseComponent} from './cause/cause.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignupComponent} from './signup/signup.component';
import {ChartsModule} from 'ng2-charts';
import {SummaryComponent} from './summary/summary.component';
import {MotherBrainService} from './mother-brain.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    HomeComponent,
    HeaderComponent,
    CategoryComponent,
    BannerComponent,
    ProfileComponent,
    SelectionComponent,
    DetailsComponent,
    ThankyouComponent,
    CauseComponent,
    SignupComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [MotherBrainService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private mbService: MotherBrainService) {
  }
}
