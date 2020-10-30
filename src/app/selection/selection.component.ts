import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  // TODO make data not static
  // TODO Fix nonresponsiveness

  forwardConfig = {
    route: '/',
    text: 'Continuar'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
