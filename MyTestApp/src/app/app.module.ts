import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MyCustomDirective } from "./my-custom.directive";
import { MyLoopDirective } from "./my-loop.directive";
import { ProductsService } from "./products/products.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MyCustomDirective,
    MyLoopDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ProductsService], // { provide : ProductsService, useClass: ProductsService }
  bootstrap: [AppComponent],
})
export class AppModule {}
