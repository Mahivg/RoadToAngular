import { Product } from "../model/product";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { UserResponse } from "../model/UserResponse";
import { identifierModuleUrl } from "@angular/compiler";

export class ProductsService {
  products: Product[];

  constructor(private httpClient: HttpClient) {
    this.products = [
      new Product(1, "Apple", 10, new Date(), true),
      new Product(2, "Orange", 10, new Date(), true),
      new Product(3, "Pinapple", 10, new Date(), true),
      new Product(4, "Mango", 10, new Date(), true),
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.filter((p) => p.id == id)[0];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getUsers() {
    const userURL = "https://jsonplaceholder.typicode.com/users";

    return this.httpClient.get<UserResponse[]>(userURL, {
      params: new HttpParams().set("active", "value"),
    });
  }

  postUser(user: UserResponse) {
    const addUserURL =
      "https://mytestapplication-f1239.firebaseio.com/mytestapplication-f1239.json";

    return this.httpClient.post(addUserURL, user);
  }

  putUser(user: UserResponse) {
    const putURL = "https://jsonplaceholder.typicode.com/users/1";
    return this.httpClient.put(putURL, user);
  }

  deleteUser() {
    // Soft delete and Hard delete,
    // user,, product, active

    // users => active == true => user  id =1  active/false
    //

    this.httpClient
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .subscribe((res) => console.log);
  }
}
