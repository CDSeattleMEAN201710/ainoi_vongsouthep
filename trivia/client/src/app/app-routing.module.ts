import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { HomeComponent } from './users/home/home.component';
import { AddQuestionComponent } from './users/add-question/add-question.component'


const routes: Routes = [
  { path: 'login', component: UsersLoginComponent },
  { path: 'dashboard', component: UsersDashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddQuestionComponent },
  { path: '**', redirectTo: '/login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }