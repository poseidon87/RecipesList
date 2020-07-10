import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Sourdough Bread',
      'Known for its characteristic flavor ranging from mild to strong, chewy texture, and crisp crust.',
      '../../../assets/images/Sourdough_Bread.jpg'
    ),
    new Recipe(
      'Sourdough Cinnamon Rolls',
      'Delicious Sourdough Cinnamon Buns soft,buttery buns with cinnamon sugar glazed with cream cheese glaze great breakfast treat any day.',
      '../../../assets/images/Sourdough-Cinnamon-Buns.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
