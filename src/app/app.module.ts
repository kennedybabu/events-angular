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
import { EventpageComponent } from './pages/eventpage/eventpage.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


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
import { MonthDayPipe } from './month-day.pipe';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { NotificationComponent } from './components/alerts/notification/notification.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CommentObjComponent } from './components/comment-obj/comment-obj.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';



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
    SignupComponent,
    MonthDayPipe,
    EditEventComponent,
    NotificationComponent,
    EditProfileComponent,
    EventpageComponent,
    CommentObjComponent,
    BlogsComponent,
    BlogComponent,
    BlogViewComponent,
    CreateBlogComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule
    
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
