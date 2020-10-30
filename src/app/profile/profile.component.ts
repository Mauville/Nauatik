import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faEdit, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faUser: IconDefinition = faUser;
  faEdit: IconDefinition = faEdit;
  contributions = 'Haz realizado 260 donaciones!';

  constructor() {
  }

  ngOnInit(): void {
  }

}
