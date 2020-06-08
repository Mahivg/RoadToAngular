export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  active: boolean;

  constructor(
    pId: number,
    pName: string,
    pDesc: string,
    pPrice: number,
    pStatus: boolean
  ) {
    this.id = pId;
    this.name = pName;
    this.description = pDesc;
    this.price = pPrice;
    this.active = pStatus;
  }
}
