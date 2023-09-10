import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { RegisterComponent } from './register-component/register-component.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreatePostComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { SearchResultsComponent } from './search-result/search-result.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'profile', component: ProfileComponent},
  { path: 'create', component: CreatePostComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'comments',component:CommentsComponent},
  {path:'searchresult',component:SearchResultsComponent},
  { path: 'error', component: ErrorComponent }, // Route for ErrorComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
