import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  name = "Test 1";

  tempName: string;

  myBoolean = true;

  numbers = [1, 2, 3, 4, 5];

  id = "1";

  myObj = { name: "myName" };

  getName() {
    return this.name;
  }

  onButtonClick(event) {
    console.log("Button Clicked");
    console.log(event);
    this.myBoolean = !this.myBoolean;
  }
  constructor() {}

  ngOnInit() {}

  onInputChange(event) {
    console.log(event);
    this.name = event.target.value;
  }

  updateText() {
    this.name = this.tempName;
  }
}
