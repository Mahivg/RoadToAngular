import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    children: [{ path: ":id/view", component: ProductDetailComponent }],
  },
  // { path: "products/:id", component: ProductDetailComponent }, // { id : }
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserDetailComponent },
  { path: "", redirectTo: "products", pathMatch: "full" }, // default
  { path: "**", component: NotFoundComponent }, // wild route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
