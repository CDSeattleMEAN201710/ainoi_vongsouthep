import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  new_user: User;

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.new_user = new User; // this set new_user to new User object
  }

  login() {
    this.user_service.create(this.new_user)
      .then(() => this.router.navigate(["/dashboard"]))
      .catch(err => console.log("User login Error",err))
  }

}
