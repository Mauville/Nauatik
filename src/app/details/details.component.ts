import {Component, OnInit} from '@angular/core';
import {MotherBrainService} from '../mother-brain.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  buttonBack = {
    route: '/cause',
    text: 'Atras'
  };
  src: string;

  constructor(private mbService: MotherBrainService) {
  }

  ngOnInit(): void {
    this.src = this.mbService.getChosenCat().faIcon;
  }
}
