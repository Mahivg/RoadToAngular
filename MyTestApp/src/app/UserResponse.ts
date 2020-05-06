export class GEO {
  private lat: string;
  private lng: string;
}

export class Address {
  private city: string;
  private suite: string;
  private street: string;
  private zipcode: string;
  private geo: GEO;
}

export class Company {
  private name: string;
  private bs: string;
  private catchPhrase: string;
}

export class UserResponse {
  private id: number;
  private name: string;
  private phone: string;
  private website: string;
  private email: string;
  private address: Address;
  private company: Company;
}
