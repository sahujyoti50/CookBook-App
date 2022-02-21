import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients:Ingredient[];
 constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
      this.ingredients=this.shoppingService.getIngredients();
      this.shoppingService.ingredientsChanged
      .subscribe(
        (ingredients:Ingredient[]) => {
          this.ingredients=ingredients;
        }
      )
  }
}