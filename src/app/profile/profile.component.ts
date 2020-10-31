import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faEdit, faUser} from '@fortawesome/free-solid-svg-icons';
import {MotherBrainService} from '../mother-brain.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  add1: string;
  add2: string;
  card: string;
  faUser: IconDefinition = faUser;
  faEdit: IconDefinition = faEdit;
  contributions = 'Haz realizado 260 donaciones!';
  confbutton = {
    text: 'Sign Out',
    route: '/',
  };

  constructor(private mbs: MotherBrainService) {
  }

  ngOnInit(): void {
    this.username = this.mbs.getUserName();
    this.add1 = this.mbs.getAddress()[0];
    this.add2 = this.mbs.getAddress()[1];
    this.card = '************' + this.mbs.getCC().slice(11);
  }

}
