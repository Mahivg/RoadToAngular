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
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
  providers: [ProductsService],
})
export class ProductDetailComponent implements OnInit, OnChanges {
  productObj: any;

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

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onButtonClick(event) {
    console.log("Button Clicked");
    console.log(event);
    this.myBoolean = !this.myBoolean;
  }

  ngOnInit() {
    //this.productService = new ProductsService();
    this.products = this.productService.getProducts();
    this.productObj = new Product(1, "Test", 100, new Date(), true);

    let id = this.route.snapshot.params["id"];
    let sub = this.route.params.subscribe((params) => {
      let id = params["id"];
      console.log(`id = ${id}`);
    });

    this.route.queryParams.subscribe((qParams) => {
      let id = qParams["id"];
      let name = qParams["name"];

      console.log(id + "  " + name);
    });
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

  reload() {
    this.router.navigate(["/products", 230]);
  }
}
