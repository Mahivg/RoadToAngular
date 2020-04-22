let number: number;

number = 11;

console.log(`my number is ${number}`);

let myStr: string;

myStr = "Test String";

console.log(`my string is ${myStr}`);

let myBoolean: boolean;

myBoolean = 1 == 1;

console.log(`my Boolean is ${myBoolean}`);

let myObj: object = {
  name: "myName",
  age: 10,
};

interface PersonObj {
  name: string;
  age: number;
}

let myPerson: PersonObj = {
  name: "myName",
  age: 10,
};

console.log(`my person name ${myPerson.name}`);

let myStringArray: string[];

myStringArray = ["test"];

myStringArray.push("test1");

var length = myStringArray.length;

console.log(`my first elemnt array ${myStringArray[0]}`);

const APP_CONST = {
  API_URL: "myApiURL",
  API_KEY: "myAPiKEy",
  ADMIN_ROLE: 0,
  AUTHOR_ROLE: 1,
};

enum ROLE {
  ADMIN_ROLE = "ADMIN",
  AUTHOR_ROLE = "AUTHOR",
}

let myRoleTuple: [number, string]; // Tuple

interface PersonObj1 {
  name: string;
  age: number;
  role: [number, string];
}

let myPerson1: PersonObj1 = {
  name: "myName",
  age: 10,
  role: [1, "ADMIN"],
};

if (myPerson1.role[1] === ROLE.ADMIN_ROLE) {
  console.log("Admin Role");
}

console.log(APP_CONST.API_KEY);

let myAny;

myAny = 10;

myAny = "myAny";

let myAdd: () => void;

function combine(num1: any, num2: any) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 + num2;
  } else {
    return num1 + "-" + num2;
  }
}

interface myObj {
  name: string;
}

var datObj: object = {
  name: "myName",
};

myAdd = function () {
  let a = 10;

  return a;
};

if (true) {
}

console.log(combine(1, 1));

console.log(combine("1", "1"));

console.log(combine("firstName", "lastName1"));

var myBtn = document.getElementById("myBtn")!;

/**
 * Adding Event listeners
 */

myBtn.addEventListener("click", function () {
  console.log("clicked");
  console.log("breakpoint");
});
