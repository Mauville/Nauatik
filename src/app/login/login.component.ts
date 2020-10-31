import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  LoginButtonConfig = {
    role: 'primary',
    text: 'Log In',
    route: '/home'
  };

  SignUpButtonConfig = {
    text: 'Sign Up',
    route: '/signup'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
