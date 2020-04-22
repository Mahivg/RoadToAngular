import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-products",
  templateUrl: "./products.component.html",
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsComponent {
  product: any;

  @ViewChild("div1", { static: true }) div1: ElementRef;

  @ViewChild("form1", { static: true }) form1: NgForm;

  constructor() {
    this.product = { name: "MyTestProduct", description: "Test description" };
  }

  myVal: boolean;

  productChanged(event) {
    console.log("parent event");
    console.log(event);
    // this.product = event;
    console.log(this.div1);

    console.log(this.form1);
  }
}
