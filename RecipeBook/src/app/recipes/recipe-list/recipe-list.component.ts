import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes";

@Component({
  selector: "rb-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  title = "Recipes";
  showPTag = true;
  recipes: Recipe[] = [
    new Recipe(
      1,
      "Test1",
      "Test Description 1",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_porridge_bowl.jpg"
    ),
    new Recipe(
      2,
      "Test2",
      "Test Description 2",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_porridge_bowl.jpg"
    ),
    new Recipe(
      3,
      "Test3",
      "Test Description 3",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_porridge_bowl.jpg"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
