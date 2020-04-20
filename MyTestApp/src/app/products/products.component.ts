import { Component } from "@angular/core";

@Component({
  selector: "my-products",
  template: `<p>My Product compoent</p>
    <p>Second line</p> `,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class ProductsComponent {}
