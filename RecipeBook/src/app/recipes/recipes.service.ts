import { Recipe } from "../model/Recipe";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipes = [
    new Recipe(
      1,
      "Test 1",
      "Test Description 1",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
    ),
    new Recipe(
      2,
      "Test 2",
      "Test Description 2",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
    ),
  ];

  onRecipeSelected = new Subject<string>();

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(rId: number) {
    return this.recipes.filter((r) => r.id === rId)[0];
  }

  getRecipeByName(rName: string) {
    return this.recipes.filter((r) => r.name === rName)[0];
  }

  updateRecipeById(rId: number, recipe: Recipe) {
    let index = this.recipes.findIndex((r) => r.id == rId);
    if (index !== -1) {
      this.recipes[index] = recipe;
    }
  }

  addRecipes(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
