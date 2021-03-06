import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    // const value = form.value;
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    this.shoppingService.onIngredientAdded(newIngredient);
  }
}
