import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MyCustomDirective } from "./my-custom.directive";
import { MyLoopDirective } from "./my-loop.directive";
import { ProductsService } from "./products/products.service";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MyCustomDirective,
    MyLoopDirective,
    HeaderComponent,
    UsersComponent,
    UserDetailComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ProductsService], // { provide : ProductsService, useClass: ProductsService }
  bootstrap: [AppComponent],
})
export class AppModule {}
