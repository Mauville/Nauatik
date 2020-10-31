import {Component, OnInit} from '@angular/core';
import {CategoryData} from '../category/category.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // TODO Add link to router on categories

  plastic: CategoryData = {faIcon: 'assets/bottle.png', title: 'Plástico'};
  paper: CategoryData = {faIcon: 'assets/cardboard.png', title: 'Papel y Cartón'};
  glass: CategoryData = {faIcon: 'assets/glass.png', title: 'Vidrio'};
  food: CategoryData = {faIcon: 'assets/apple.png', title: 'Alimentos'};
  cans: CategoryData = {faIcon: 'assets/can.png', title: 'Latas'};
  sanitary: CategoryData = {faIcon: 'assets/facemask.png', title: 'Residuos Sanitarios'};
  categories: CategoryData[] = [this.plastic, this.paper, this.glass, this.food, this.cans, this.sanitary];


  ngOnInit(): void {
  }

}
