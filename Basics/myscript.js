var str = "myStr";
console.log(str);

var num = 10;

num = 5.50000000044444;
console.log(num);
var myboolean = "a" == "a";
console.log(myboolean);

var myUndefined = undefined;

str = null;
console.log(myUndefined);

var name = "myName";
var age = 18;

var myJSON = {
  name: "myName",
  age: 18,
  json: "Javascript Object Notation",
};

console.log(typeof myJSON);

var myArray = [myJSON, "test", 1, true];
myArray.push("anyvalue");
myArray.pop();
//   console.log(myArray.length);

//   myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//   myArray.forEach(function (data) {
//     console.log(data);
//   });
//   var result = myArray.map(function (data) {
//     return "0" + data;
//   });
//   console.log(result);

// Lexical scoping, not global, block level

function nameOfFunction(add1, add2) {
  var testNum = "10";
  console.log(typeof testNum);

  if (testNum === 10) {
    console.log("true");
  } else if (testNum == 12) {
    console.log("12");
  } else {
    console.log("false");
  }
  return "test";
}

function add(add1, add2) {
  return add1 + add2;
}

console.log(add());

add4();

function add4() {
  console.log("called add4");
}

var add = function (outer) {
  var addTo = function (inner) {
    return outer + inner;
  };
  return addTo;
};

var add5 = add(5);
console.dir(add5);
var add5With15 = add5(15);

console.log(add5With15);
var add5With10 = add5(10);
console.log(add5With10);

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);

  this.getFullName = function () {
    return `${this.firstName}-added-${this.lastName}`; // Template literals this.firstName + '-added-' + this.lastName
  };
}

var person1 = new Person("john", "smith", "23-05-2020");
console.log(person1);
console.log(person1.getFullName());

var minus = function (num1, num2) {
  return num1 - num2;
};

var minus1 = () => {
  return num1 - num2;
};

function actionOnPtag() {
  var myPTag = document.getElementById("myPTag");
  myPTag.style.backgroundColor = "rgb(131, 179, 211)";
}

actionOnPtag();

function onSubmit(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;

  var result = {
    name: name,
    date: date,
  };
}

var clickBtnMethod = function (event) {
  console.log(event);
};

document.getElementById("myBtn").addEventListener("mouseleave", clickBtnMethod);
document.getElementById("myBtn").addEventListener("mouseenter", clickBtnMethod);
document.getElementById("myBtn").addEventListener("click", clickBtnMethod);
