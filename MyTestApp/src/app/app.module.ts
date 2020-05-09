import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { MyCustomDirective } from "./shared/directive/my-custom.directive";
import { MyLoopDirective } from "./shared/directive/my-loop.directive";
import { ProductsService } from "./products/products.service";
import { HeaderComponent } from "./shared/components/header/header.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { LimitToPipe } from "./shared/pipes/limitTo.pipe";
import { FilterPipe } from "./shared/pipes/filter.pipe";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./shared/interceptors/AuthInterceptor";
import { ProductsModule } from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    MyCustomDirective,
    MyLoopDirective,
    HeaderComponent,
    UsersComponent,
    UserDetailComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
  ],
  providers: [
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ], // { provide : ProductsService, useClass: ProductsService }
  bootstrap: [AppComponent],
})
export class AppModule {}
