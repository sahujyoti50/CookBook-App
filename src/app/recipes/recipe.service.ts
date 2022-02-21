import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipes:Recipe[]=[
        new Recipe('lasagna','Perfect homemade lasagna layered with tender pasta, beefy flavorful marinara sauce and plenty of cheeses!','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/09/Zucchini-Lasagna-3.jpg'),
        new Recipe('Spinach Alfredo Lasagna','Spinach Alfredo Lasagna Roll Ups is comfort food made simple!','https://images-gmi-pmc.edge-generalmills.com/6a71b700-93a9-4c73-9337-3bde9fac2c02.jpg'),
        new Recipe('Chicken Bacon Alfredo Roll Ups','Creamy Chicken Alfredo Pasta Recipe ,Alfredo Roll Ups are cheesy, perfectly portioned servings of deliciousness.','https://i.ytimg.com/vi/BCmVJC-Lm0g/maxresdefault.jpg')
       ];

      recipeSelected=new EventEmitter<Recipe>();

       getRecipes(){
           return this.recipes;
       }
}