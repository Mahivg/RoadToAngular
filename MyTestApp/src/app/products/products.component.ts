import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "./product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  title = "Products";

  product = { name: "test" };

  @Input() products: Product[];

  @Output() onProductEmit = new EventEmitter<string>();

  // products: Product[] = [
  //   new Product(1, "Mobile", "Smart Phone", 200, true),
  //   new Product(2, "TV", "Smart TV", 200, true),
  //   new Product(3, "Air conditioner", "LG", 200, true),
  //   new Product(4, "Washing Machine", "samsung", 200, true),
  // ];

  h4Id = "h41";

  userName: string = "Test";

  addClass = true;

  public getProduct() {
    return this.product;
  }

  public onButtonClick() {
    console.log("Button clicked");
  }

  public printUserName() {
    // alert(this.userName);
    this.addClass = !this.addClass;
  }

  emitToParent() {
    this.onProductEmit.emit("I am from product component!!");
  }

  constructor() {}

  ngOnInit() {}
}
