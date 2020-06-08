import { Component, OnInit } from "@angular/core";
import { Ingredient } from "./Ingredient";

@Component({
  selector: "rb-shopping",
  templateUrl: "./shopping.component.html",
  styleUrls: ["./shopping.component.css"],
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(1, "Bread", 3),
    new Ingredient(2, "Meat", 3),
  ];

  constructor() {}

  ngOnInit() {}
}
