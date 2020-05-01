import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { AuthGaurd } from "./auth.gaurd";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],
    children: [{ path: ":id/view", component: ProductDetailComponent }],
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
