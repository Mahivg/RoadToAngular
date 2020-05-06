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
import { Observable, interval, throwError, Subject } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { UserResponse } from "../UserResponse";

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
      .card {
        cursor: pointer;
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

  users: UserResponse[];

  user: UserResponse;

  @ViewChild("div1", { static: true }) div1: ElementRef;

  @ViewChild("form1", { static: true }) form1: NgForm;

  @ViewChild("txtProductId", { static: true }) txtProductId: ElementRef;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  myVal: boolean;

  //productService: ProductsService;

  products: Product[];

  productChanged(event) {
    console.log("parent event");
    console.log(event);
    this.product = event;
  }
  sub: any;

  subscription: any;

  onRecipeChangedSubject = new Subject<string>();

  searchText: string = "";

  ngOnInit(): void {
    this.product = { name: "My Product 1", description: "My Test Description" };
    // console.log(" ngOnInit : Called ... ");
    //this.productService = new ProductsService();
    this.products = this.productService.getProducts();
    // console.log(this.products);
    // Observable.create(observer => {
    //   observer.next('string');
    //   Observable.throw(new Error());
    //   observer.complete();
    // })

    // interval(1000).subscribe((data) => {
    //   console.log(data);
    // });

    this.sub = Observable.create((observer) => {
      let counter = 0;
      setInterval(() => {
        observer.next(counter);
        counter++;
        if (counter == 5) {
          observer.error("limit Exceeded");
        }
        if (counter == 4) {
          observer.complete();
        }
      }, 1000);
    });

    this.subscription = this.sub.subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Job completed");
      }
    );
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
    this.subscription.unsubscribe();
  }

  addAndPrintArray() {
    const prod = new Product(6, "grape", 10, new Date(), true);
    this.productService.addProduct(prod);
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  goToProductDetailPage() {
    let id = this.txtProductId.nativeElement.value;
    this.router.navigate(["products", id], {
      queryParams: { id: 19, name: "prod" },
    });
  }

  onProductSelect(id: number) {
    console.log(id);
    this.router.navigate(["products", id, "view"]);
  }

  getUsers() {
    this.productService.getUsers().subscribe((res) => {
      this.users = res;
      this.user = this.users[1];
    });
  }

  postUser() {
    this.productService.postUser(this.user).subscribe((res) => console.log);
  }
}
