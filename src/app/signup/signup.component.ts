import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MotherBrainService} from '../mother-brain.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('numberInput') numberInput: ElementRef;
  @ViewChild('passInput') passInput: ElementRef;
  @ViewChild('add1Input') add1Input: ElementRef;
  @ViewChild('add2Input') add2Input: ElementRef;
  @ViewChild('ccInput') ccInput: ElementRef;
  buttonConfig = {
    text: 'Reciclemos!',
    route: '/'
  };

  constructor(private mbService: MotherBrainService) {
  }

  registerUser(): void {
    this.mbService.setPassword(this.passInput.nativeElement.value);
    this.mbService.setUserName(this.nameInput.nativeElement.value);
    this.mbService.setPhone(this.numberInput.nativeElement.value);
    this.mbService.setAddress([this.add1Input.nativeElement.value, this.add2Input.nativeElement.value]);
    this.mbService.setCC(this.ccInput.nativeElement.value);

  }

  ngOnInit(): void {
  }

}
