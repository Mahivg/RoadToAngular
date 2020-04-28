import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Recipe } from "src/app/model/Recipe";

@Component({
  selector: "ht-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];

  constructor() {}

  ngOnInit() {}
}
