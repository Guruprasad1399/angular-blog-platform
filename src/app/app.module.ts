import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register-component/register-component.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreatePostComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { SearchResultsComponent } from './search-result/search-result.component';
import { ErrorComponent } from './error/error.component';
import { CustomErrorHandler } from './error-handler.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinglePostComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CreatePostComponent,
    DashboardComponent,
    CommentsComponent,
    SearchResultsComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
