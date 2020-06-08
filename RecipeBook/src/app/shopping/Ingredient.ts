export class Ingredient {
  id: number;
  name: string;
  quantity: number;

  constructor(iId: number, iName: string, iQuantity: number) {
    this.id = iId;
    this.name = iName;
    this.quantity = iQuantity;
  }
}
