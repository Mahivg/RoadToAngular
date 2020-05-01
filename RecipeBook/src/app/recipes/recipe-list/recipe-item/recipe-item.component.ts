import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";
import { RecipeService } from "../../recipes.service";
import { Router } from "@angular/router";

@Component({
  selector: "ht-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeItem") recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {}

  onItemSelected(id: number) {
    this.router.navigate(["recipes", id]);
  }
}
