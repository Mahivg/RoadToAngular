import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductsService } from "./products.service";
import { Product } from "./product";

@Component({
  selector: "my-products",
  templateUrl: "./products.component.html",
  styles: [
    `
      p {
        color: red;
      }
      .customDirP {
        padding: 20px;
        margin: 20px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [ProductsService],
})
export class ProductsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  product: any;

  @ViewChild("div1", { static: true }) div1: ElementRef;

  @ViewChild("form1", { static: true }) form1: NgForm;

  constructor(private productService: ProductsService) {}

  myVal: boolean;

  //productService: ProductsService;

  products: Product[];

  productChanged(event) {
    console.log("parent event");
    console.log(event);
    this.product = event;
  }

  ngOnInit(): void {
    this.product = { name: "My Product 1", description: "My Test Description" };
    // console.log(" ngOnInit : Called ... ");
    //this.productService = new ProductsService();
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(" ngOnChanges : Called ... ");
  }

  ngDoCheck(): void {
    // console.log(" ngDoCheck : Called ... ");
  }

  ngAfterContentInit(): void {
    // console.log(" ngAfterContentInit : Called ... ");
  }

  ngAfterContentChecked(): void {
    // console.log(" ngAfterContentChecked : Called ... ");
  }

  ngAfterViewInit(): void {
    // console.log(" ngAfterViewInit : Called ... ");
  }

  ngAfterViewChecked(): void {
    // console.log(" ngAfterViewChecked : Called ... ");
  }

  ngOnDestroy(): void {
    // console.log(" ngOnDestory : Called ... ");
  }

  addAndPrintArray() {
    const prod = new Product(6, "grape", 10, new Date(), true);
    this.productService.addProduct(prod);
    this.products = this.productService.getProducts();
    console.log(this.products);
  }
}
