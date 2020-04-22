export class Recipe {
  name: string;

  description: string;

  imageUrl: string;

  constructor(rName: string, rDesc: string, rImageUrl: string) {
    this.name = rName;
    this.description = rDesc;
    this.imageUrl = rImageUrl;
  }
}
