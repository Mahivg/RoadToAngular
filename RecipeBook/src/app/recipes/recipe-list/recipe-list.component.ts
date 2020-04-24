import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";

@Component({
  selector: "ht-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];

  @Output() onRecipeChanged = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(eValue: string) {
    const recipeObj = this.recipes.filter(
      (recipe) => recipe.name === eValue
    )[0];
    this.onRecipeChanged.emit(recipeObj);
  }
}
