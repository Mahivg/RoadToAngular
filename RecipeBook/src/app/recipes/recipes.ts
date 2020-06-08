export class Recipe {
  id: number;
  name: string;
  description: string;
  imageUrl: string;

  constructor(rId: number, rName: string, rDesc: string, rImageUrl: string) {
    this.id = rId;
    this.name = rName;
    this.description = rDesc;
    this.imageUrl = rImageUrl;
  }
}
