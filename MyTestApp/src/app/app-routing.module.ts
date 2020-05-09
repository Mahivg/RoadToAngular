import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule),
  },
  // { path: "products/:id", component: ProductDetailComponent }, // { id : }
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserDetailComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }, // default
  { path: "**", component: NotFoundComponent }, // wild route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd],
})
export class AppRoutingModule {}
