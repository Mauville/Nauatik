import {Component, Input, OnInit} from '@angular/core';

export interface CategoryData{
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
