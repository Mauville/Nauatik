import {Component, Input, OnInit} from '@angular/core';
import {MotherBrainService} from '../mother-brain.service';

export interface CategoryData {
  faIcon: string;
  title: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  @Input() categoryConfig: CategoryData;

  constructor(private mbService: MotherBrainService) {
  }

  setSeshCat(): void {
    this.mbService.setChosenCat(this.categoryConfig);
  }

  ngOnInit(): void {
  }

}
