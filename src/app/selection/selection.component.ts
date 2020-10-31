import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MotherBrainService} from '../mother-brain.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  @ViewChild('massInput') massInput: ElementRef;

  text: string;
  image: string;
  price = 0;


  forwardConfig = {
    route: '/cause',
    text: 'Continuar'
  };

  constructor(private mbService: MotherBrainService) {
  }

  calc(): void {
    this.price = 25 * this.massInput.nativeElement.value;

  }

  setSesh(): void {
    this.mbService.setMoneyEarn(this.price);
  }

  ngOnInit(): void {
    this.text = this.mbService.getChosenCat().title;
    this.image = this.mbService.getChosenCat().faIcon;
  }

}
