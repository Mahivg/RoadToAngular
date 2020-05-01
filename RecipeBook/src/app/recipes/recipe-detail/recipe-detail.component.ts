import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipes.service";

@Component({
  selector: "ht-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params["id"];
      this.recipe = this.recipeService.getRecipeById(id);
      console.log("Recipe in recipe dettail");
      console.log(this.recipe);
    });
  }
}
