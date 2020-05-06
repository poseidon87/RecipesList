import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sourdough Bread',
      'Known for its characteristic flavor ranging from mild to strong, chewy texture, and crisp crust.',
      '../../../assets/images/Sourdough_Bread.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
