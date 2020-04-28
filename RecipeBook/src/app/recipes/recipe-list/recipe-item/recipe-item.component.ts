import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";
import { RecipeService } from "../../recipes.service";

@Component({
  selector: "ht-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeItem") recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onItemSelected(rName: string) {
    this.recipeService.onRecipeSelected.next(rName);
  }
}
