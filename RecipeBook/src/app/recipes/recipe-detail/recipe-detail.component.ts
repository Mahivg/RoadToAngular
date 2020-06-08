import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes";

@Component({
  selector: "rb-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe(
    1,
    "Test1",
    "Test Description 1",
    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_porridge_bowl.jpg"
  );

  constructor() {}

  ngOnInit() {}
}
