import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MyCustomDirective } from "./my-custom.directive";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MyCustomDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
