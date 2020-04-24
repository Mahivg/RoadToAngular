import { Component, OnInit } from "@angular/core";
import { Recipe } from "../model/Recipe";

@Component({
  selector: "ht-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {
    this.recipes = [
      new Recipe(
        "Test 1",
        "Test Description 1",
        "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
      ),
      new Recipe(
        "Test 2",
        "Test Description 2",
        "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
      ),
    ];
  }

  updateRecipeDetail(eValue: Recipe) {
    this.selectedRecipe = eValue;
  }
}
