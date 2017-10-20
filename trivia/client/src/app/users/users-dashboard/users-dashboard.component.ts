import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  users: Array<User>

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {

    this.user_service.am_i_logged_in()
      .then(user => console.log(user))
      .catch(() => this.router.navigate(["/login"]))


    this.user_service.get_all()
      .then(users => this.users = users)
      .catch(err => console.log("Get all users ERROR", err))
  }

}
