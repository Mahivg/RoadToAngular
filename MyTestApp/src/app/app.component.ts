import { Component, ViewEncapsulation } from "@angular/core";
import { ProductsService } from "./products/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ProductsService],
})
export class AppComponent {
  title = "MyTestApp";
  hideMyProducts: true;
}
