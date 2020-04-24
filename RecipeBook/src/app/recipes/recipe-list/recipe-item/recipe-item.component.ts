import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";

@Component({
  selector: "ht-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeItem") recipe: Recipe;

  @Output() onRecipeItemSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onItemSelected(rName: string) {
    this.onRecipeItemSelected.emit(rName);
  }
}
