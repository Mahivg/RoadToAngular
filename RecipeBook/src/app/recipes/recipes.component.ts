import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../model/Recipe";
import { RecipeService } from "./recipes.service";
import { Subscription } from "rxjs";

@Component({
  selector: "ht-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  subscription: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.onRecipeSelected.subscribe(
      (data) => {
        this.selectedRecipe = this.recipeService.getRecipeByName(data);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  if(){}
}
