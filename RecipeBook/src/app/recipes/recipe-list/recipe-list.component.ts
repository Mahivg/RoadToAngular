import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";

@Component({
  selector: "ht-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

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
}
