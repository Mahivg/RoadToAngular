import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../model/ingredient";

@Component({
  selector: "ht-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() {}

  ngOnInit() {
    this.ingredients = [
      new Ingredient("Bread", 5),
      new Ingredient("pasta", 10),
    ];
  }
}
