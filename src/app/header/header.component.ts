import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faChartBar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  green = 'assets/logogreen.png';
  white = 'assets/logowhite.png';
  src = this.green;
  faBars: IconDefinition = faChartBar;
  faUser: IconDefinition = faUser;

  constructor() {
  }


  setLogoColor(isGreen: boolean): void {
    if (isGreen) {
      this.src = this.green;
    } else {
      this.src = this.white;
    }
  }


  ngOnInit(): void {
    this.setLogoColor(true);
  }

}
