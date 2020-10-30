import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // TODO Add route

  buttonBack = {
    route: '/',
    text: 'Atras'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
