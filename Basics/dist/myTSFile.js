"use strict";
var number;
number = 11;
console.log("my number is " + number);
var myStr;
myStr = "Test String";
console.log("my string is " + myStr);
var myBoolean;
myBoolean = 1 == 1;
console.log("my Boolean is " + myBoolean);
var myObj = {
    name: "myName",
    age: 10,
};
var myPerson = {
    name: "myName",
    age: 10,
};
console.log("my person name " + myPerson.name);
var myStringArray;
myStringArray = ["test"];
myStringArray.push("test1");
var length = myStringArray.length;
console.log("my first elemnt array " + myStringArray[0]);
var APP_CONST = {
    API_URL: "myApiURL",
    API_KEY: "myAPiKEy",
    ADMIN_ROLE: 0,
    AUTHOR_ROLE: 1,
};
var ROLE;
(function (ROLE) {
    ROLE["ADMIN_ROLE"] = "ADMIN";
    ROLE["AUTHOR_ROLE"] = "AUTHOR";
})(ROLE || (ROLE = {}));
var myRoleTuple;
var myPerson1 = {
    name: "myName",
    age: 10,
    role: [1, "ADMIN"],
};
if (myPerson1.role[1] === ROLE.ADMIN_ROLE) {
    console.log("Admin Role");
}
console.log(APP_CONST.API_KEY);
var myAny;
myAny = 10;
myAny = "myAny";
var myAdd;
function combine(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else {
        return num1 + "-" + num2;
    }
}
myAdd = function () {
    var a = 10;
    return a;
};
console.log(combine(1, 1));
console.log(combine("1", "1"));
console.log(combine("firstName", "lastName1"));
var myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function () {
    console.log("clicked");
});
//# sourceMappingURL=myTSFile.js.map