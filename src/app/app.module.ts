import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { EventComponent } from './components/event/event.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatDialogModule} from '@angular/material/dialog';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DashButtonsComponent } from './components/dash-buttons/dash-buttons.component';
import { StatsComponent } from './components/stats/stats.component';
import { EventDraftComponent } from './components/event-draft/event-draft.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './_services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    UserCardComponent,
    ButtonsComponent,
    EventComponent,
    WeatherComponent,
    CategoriesComponent,
    FooterComponent,
    CreateEventComponent,
    UserProfileComponent,
    DashButtonsComponent,
    StatsComponent,
    EventDraftComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
