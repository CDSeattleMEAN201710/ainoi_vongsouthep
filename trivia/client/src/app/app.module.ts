import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

import { UserService } from './users/user.service';
import { HomeComponent } from './users/home/home.component';
import { AddQuestionComponent } from './users/add-question/add-question.component'
import { QuestionService } from './users/add-question/question.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
    HomeComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [UserService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }