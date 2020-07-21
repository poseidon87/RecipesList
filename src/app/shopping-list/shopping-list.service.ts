import { Ingredient } from '../shared/models/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Bread Flour 5-lbs.', 2),
    new Ingredient('24 pk water', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}