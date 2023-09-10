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
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Home' } },
  { path: 'post/:id', component: SinglePostComponent, data: { title: 'Post' } },
  { path: 'register', component: RegisterComponent,data: { title: 'Register' } },
  { path: 'login', component: LoginComponent,data: { title: 'Login' } },
  {path:'profile', component: ProfileComponent,data: { title: 'Your Profile' }},
  { path: 'create', component: CreatePostComponent,data: { title: 'Create a Blog Post' } },
  {path:'dashboard',component:DashboardComponent, data: { title: 'Dashboard' }},
  {path:'comments',component:CommentsComponent,data: { title: 'Comments' }},
  {path:'searchresult',component:SearchResultsComponent,data: { title: 'Search for a post' }},
  { path: 'error', component: ErrorComponent,data: { title: 'Oops ! We encountered an issue' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
