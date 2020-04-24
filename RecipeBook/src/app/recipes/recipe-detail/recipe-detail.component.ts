import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";

@Component({
  selector: "ht-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input("selectedRecipe") recipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
