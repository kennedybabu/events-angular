import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './_guard/auth.guard';
import { EventpageComponent } from './pages/eventpage/eventpage.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {path:'', component: HomepageComponent, canActivate: [AuthGuard]},
  {path:'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'event/:id',component: EventpageComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blog-view/:id', component: BlogViewComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
