import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { LoginComponent } from "./login/login.component";
import { LimitToPipe } from "./limitTo.pipe";
import { FilterPipe } from "./filter.pipe";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./AuthInterceptor";

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
    LoginComponent,
    LimitToPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ], // { provide : ProductsService, useClass: ProductsService }
  bootstrap: [AppComponent],
})
export class AppModule {}
