export class Product {
  id: number;

  name: string;

  price: number;

  expireDate: Date;

  active: boolean;

  constructor(
    pID: number,
    pName: string,
    price: number,
    pExpireDate: Date,
    pActive: boolean
  ) {
    this.id = pID;
    this.name = pName;
    this.price = price;
    this.expireDate = pExpireDate;
    this.active = pActive;
  }
}
