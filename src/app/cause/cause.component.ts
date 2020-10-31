import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faCalendarDay, faEdit} from '@fortawesome/free-solid-svg-icons';
import {MotherBrainService} from '../mother-brain.service';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css']
})
export class CauseComponent implements OnInit {

  faEdit: IconDefinition = faEdit;
  faCal: IconDefinition = faCalendarDay;
  confirmButton = {
    text: 'Confirmar',
    route: '/thankyou'
  };

  address: string;

  constructor(private mbService: MotherBrainService) {
  }

  ngOnInit(): void {
    this.address = this.mbService.getAddress()[0];
  }

}
