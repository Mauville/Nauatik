import {Component, OnInit} from '@angular/core';
import {MotherBrainService} from '../mother-brain.service';

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

  constructor(private mbService: MotherBrainService) {
  }

  mail: string;


  ngOnInit(): void {
    this.mail = this.mbService.getPhone();
  }

}
