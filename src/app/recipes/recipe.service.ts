import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sourdough Bread',
      'Known for its characteristic flavor ranging from mild to strong, chewy texture, and crisp crust.',
      '../../../assets/images/Sourdough_Bread.jpg',
      [
        new Ingredient('Flour', 3),
        new Ingredient('Water', 2)
      ]
    ),
    new Recipe(
      'Sourdough Cinnamon Rolls',
      'Delicious Sourdough Cinnamon Buns soft,buttery buns with cinnamon sugar glazed with cream cheese glaze great breakfast treat any day.',
      '../../../assets/images/Sourdough-Cinnamon-Buns.jpg',
      [
        new Ingredient('Sourdough Starter', 1),
        new Ingredient('Powder Sugar', 2),
        new Ingredient('Salt', .5),
        new Ingredient('Cream Cheese', 1)
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}