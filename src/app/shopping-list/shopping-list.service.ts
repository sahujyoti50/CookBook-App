import { EventEmitter } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients:Ingredient[]=[
   new Ingredient('Cheese',10),
   new Ingredient('Tomato',5)
 ];

 getIngredients(){
    return this.ingredients.slice();
 }

 onIngredientAdded(ingredient:Ingredient){
   this.ingredients.push(ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
}

}