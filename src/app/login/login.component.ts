import {Component, OnInit} from '@angular/core';
import {MotherBrainService} from '../mother-brain.service';

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

  constructor(private mbService: MotherBrainService) {
  }

  validateSign(): void {
    console.log('Here we would validate user data');
    console.log('For now, just let the user in');
  }

  ngOnInit(): void {

    console.log(this.mbService.user);
  }

}
