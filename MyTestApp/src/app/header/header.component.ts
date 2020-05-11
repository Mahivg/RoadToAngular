import { Component } from "@angular/core";

@Component({
  selector: "app-header", // app-header, [app-header], .app-header
  template: `<h1>Header Works</h1>
    <p>Header Description</p> `,
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class HeaderComponent {
  // templateUrl: "./header.component.html",
  // styleUrls: ["./header.component.css"],
}
