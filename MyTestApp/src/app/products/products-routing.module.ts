import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const productRoutes: Routes = [
  {
    path: "",
    component: ProductsComponent,
    // canActivate: [AuthGaurd],
    // canActivateChild: [AuthGaurd],
    children: [{ path: ":id/view", component: ProductDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
