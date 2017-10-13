import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      cpassword: '',
      street: '',
      unit: '',
      city: '',
      state: '',
  };
  onSubmit() {
    console.log('onSubmit() working');
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      cpassword: '',
      street: '',
      unit: '',
      city: '',
      state: '',
  };
  }
}
