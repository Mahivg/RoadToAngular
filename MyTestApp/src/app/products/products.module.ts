import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProductsService } from "./products.service";
import { CommonModule } from "@angular/common";
import { FilterPipe } from "../shared/pipes/filter.pipe";
import { SharedModule } from "../shared/shared.module";
import { ProductsRoutingModule } from "./products-routing.module";

const productComponents = [ProductsComponent, ProductDetailComponent];

@NgModule({
  declarations: productComponents,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductsRoutingModule,
  ],
  providers: [ProductsService],
  exports: productComponents,
})
export class ProductsModule {}
