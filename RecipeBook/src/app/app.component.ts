import { Component } from "@angular/core";

@Component({
  selector: "ht-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "RecipeBook";
  featureName = "recipes";

  // featureChanged(eventValue: string) {
  //   this.featureName = eventValue;
  // }
}
