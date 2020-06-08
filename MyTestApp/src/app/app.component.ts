import { Component } from "@angular/core";
import { Product } from "./products/product";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "MyTestApp";

  feature = "products";

  appProducts: Product[] = [
    new Product(1, "Mobile", "Smart Phone", 200, true),
    new Product(2, "TV", "Smart TV", 200, true),
    new Product(3, "Air conditioner", "LG", 200, true),
    new Product(4, "Washing Machine", "samsung", 200, true),
  ];

  onMenuChange(menu: string) {
    this.feature = menu;
  }

  getFromChild(value: string) {
    console.log("In App component");

    console.log(value);
  }
}
