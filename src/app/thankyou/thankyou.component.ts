import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  anotherButton = {
    text: 'Hacer otra donacion',
    route: '/home'
  };

  endButton = {
    text: 'Terminar',
    route: '/home'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
