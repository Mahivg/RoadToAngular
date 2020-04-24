import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Product } from "../products/product";
import { ProductsService } from "../products/products.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input("productToChild") productObj: any;

  @Output() onProductChanged = new EventEmitter<{
    name: string;
    description: string;
  }>();

  testElseBlock = true;

  name = "Test 1";

  tempName: string;

  myBoolean = true;

  numbers = [1, 2, 3, 4, 5];

  id = "1";

  myObj = { name: "myName" };

  //productService: ProductsService;

  products: Product[];

  getName() {
    return this.name;
  }

  onButtonClick(event) {
    console.log("Button Clicked");
    console.log(event);
    this.myBoolean = !this.myBoolean;
  }
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    //this.productService = new ProductsService();
    this.products = this.productService.getProducts();
  }

  printProducts() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  onInputChange(event) {
    console.log(event);
    this.name = event.target.value;
  }

  updateText() {
    this.name = this.tempName;
  }

  emitProduct() {
    // const newProduct = {
    //   name: "MyTestProduct2",
    //   description: "Test description 2",
    // };
    // console.log(newProduct);

    // this.onProductChanged.emit(newProduct);
    this.testElseBlock = !this.testElseBlock;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
