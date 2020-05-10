class Person {
  name: string;
  age: number;
  constructor(pName: string, pAge: number) {
    this.name = pName;
    this.age = pAge;
  }
}

enum Role {
  ADMIN,
  AUTHOR,
}

var str1: string = "num1";

var myNumber: any;

myNumber = "afet";

myNumber = 10;

var myObj: object;

myObj = { name: "Name", age: 10 };

var myObj2: Person;

var myEnum: Role;

myEnum = Role.ADMIN;

myObj2 = new Person("Test", 10);

var myString = "string";

var myTest: number | string | boolean; // Union

var t: [number, string];

t = [1, "test"];

myNumber = 10;

function add3(num1: number, num2: number) {
  console.log(myNumber);
}

add3(2, 2);
console.log("Print");
