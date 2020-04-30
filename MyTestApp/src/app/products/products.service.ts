import { Product } from "./product";

export class ProductsService {
  products: Product[];

  constructor() {
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
}
