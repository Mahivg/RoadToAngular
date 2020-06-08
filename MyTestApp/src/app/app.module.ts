import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TestComponent } from "./test/test.component";
import { ProductsComponent } from "./products/products.component";
import { FormsModule } from "@angular/forms";
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    ProductsComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
