import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header", // app-header, [app-header], .app-header
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Output() onFeatureChange = new EventEmitter<string>();

  onMenuClick(feature: string) {
    this.onFeatureChange.emit(feature);
  }
}

// templateUrl: "./header.component.html",
// styleUrls: ["./header.component.css"],
// template: `<h1>Header Works</h1>
//   <p>Header Description</p> `,
// styles: [
//   `
//     h1 {
//       color: green;
//     }
//   `,
// ],
