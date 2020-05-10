console.log("LoginPage loaded");
var myUserNameInput = document.getElementById("myUserName");
myUserNameInput.value = "Magesh";

var myPasswordInput = document.getElementById("myPassword");
myPasswordInput.value = "Test@123";

var myBtnLogin = document.getElementById("btnLogin");

myBtnLogin.addEventListener("mouseenter", function () {
  console.log(myUserNameInput.value);
  console.log(myPasswordInput.value);
});

myBtnLogin.addEventListener("click", function () {
  console.log(myUserNameInput.value);
  console.log(myPasswordInput.value);
});

// 1991 - 2015 (ES5), 2015 - 2020 (ES6)

// Data Types

// Text content , 1,2,3 , true | false

// string, number (1, 1.0, 1.2) , boolean

// Declaring var, const, let

var myStr = "string";

const MY_CONST = "myConst";

var myArray = [1, 2, 3, 4, 5];

var myBoolean = false;

var myNum = 10;

myNum = "Test";

var myNewVar;

// camelCase

// Template literals

console.log(`My Num is ${myNum}`);

console.log(myNewVar);

for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray.forEach((num) => console.log(num));

myArray = ["name", 1, true];

function add() {
  let myLet = 10;
  console.log("Called");
}

//   function addtwo(num1, num2) {
//     return num1 + num2;
//   }

var addTwo = (num1, num2) => num1 + num2;
console.log(addTwo('2, 2));

function onButtonClick() {
  let userName = myUserNameInput.value;
  console.log(myUserNameInput.value);
  console.log(myPasswordInput.value);
}

if (myNum > 11) {
} else {
}
