import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }

}